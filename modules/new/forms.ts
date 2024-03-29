import produce from 'immer';
import { select, put, takeLatest } from 'redux-saga/effects';
import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { RootState } from '..';
import { QuestionTypes } from '../../constants/questionTypes';
import { Form } from '../../models/form';
import { Question } from '../../models/question';

/**
 * Action
 */

const REQUEST_CREATE_FORM = 'forms/REQUEST_CREATE_FORM';
const CREATE_FORM = 'forms/CREATE_FORM';
const REMOVE_FORM = 'forms/REMOVE_FORM';
const UPDATE_FORM_TITLE = 'forms/UPDATE_FORM_TITLE';
const CREATE_QUESTION = 'forms/CREATE_QUESTION';
const REMOVE_QUESTION = 'forms/REMOVE_QUESTION';
const UPDATE_QUESTION_TITLE = 'forms/UPDATE_QUESTION_TITLE';
const CREATE_QUESTION_OPTION = 'forms/CREATE_QUESTION_OPTION';
const UPDATE_QUESTION_OPTION = 'forms/UPDATE_QUESTION_OPTION';
const REMOVE_QUESTION_OPTION = 'forms/REMOVE_QUESTION_OPTION';
const UPDATE_FORM_APPLICATION_ID = 'forms/UPDATE_FORM_APPLICATION_ID';
const SAVE_FORM_DATA_ID = 'forms/SAVE_FORM_DATA_ID';
const RESET_FORMS = 'forms/RESET_FORMS';
const SET_FORMS = 'forms/SET_FORMS';

const createForm = createAction(
	CREATE_FORM,
	// prettier-ignore
	(applicationId: number | null, title: string) => ({ applicationId, title }),
)();
export const removeForm = createAction(
	REMOVE_FORM, //
	(formIdx: number) => ({ formIdx }),
)();
export const updateFormTitle = createAction(
	UPDATE_FORM_TITLE,
	(formIdx: number, title: string) => ({ formIdx, title }),
)();
export const createQuestion = createAction(
	CREATE_QUESTION,
	// prettier-ignore
	(formIdx: number, questionType: ValueOf<typeof QuestionTypes>) => ({ formIdx, questionType }),
)();
export const removeQuestion = createAction(
	REMOVE_QUESTION,
	(formIdx: number, questionIdx: number) => ({ formIdx, questionIdx }),
)();
export const updateQuestionTitle = createAction(
	UPDATE_QUESTION_TITLE, //
	(formIdx: number, questionIdx: number, title: string) => ({ formIdx, questionIdx, title }),
)();
export const createQuestionOption = createAction(
	CREATE_QUESTION_OPTION, //
	(formIdx: number, questionIdx: number) => ({ formIdx, questionIdx }),
)();
export const updateQuestionOption = createAction(
	UPDATE_QUESTION_OPTION,
	// prettier-ignore
	(formIdx:number, questionIdx: number, optionIdx:number, title:string) => ({ formIdx, questionIdx, optionIdx, title }),
)();
export const removeQuestionOption = createAction(
	REMOVE_QUESTION_OPTION,
	// prettier-ignore
	(formIdx:number, questionIdx:number, optionIdx:number) =>({ formIdx, questionIdx, optionIdx }),
)();
/** 직접 업데이트하지 말고 requestSetNewApplicationId를 통해 업데이트할 것 */
export const updateFormApplicationId = createAction(
	UPDATE_FORM_APPLICATION_ID,
	(applicationId: number) => ({ applicationId }),
)();
export const requestCreateForm = createAction(
	REQUEST_CREATE_FORM, //
	(title: string) => ({ title }),
)();
export const saveFormDataId = createAction(
	SAVE_FORM_DATA_ID, //
	(formIdx: number, dataId: number) => ({ formIdx, dataId }),
)();
export const resetForms = createAction(RESET_FORMS)();
export const setForms = createAction(SET_FORMS, (forms: FormType[]) => ({ forms }))();

/**
 * Saga
 */

function* requestCreateFormSaga({ payload }: ActionType<typeof requestCreateForm>): Generator<any> {
	const applicationId: any = yield select(({ newApplicationId }: RootState) => newApplicationId);
	yield put(createForm(applicationId, payload.title));
}

export function* formsSaga() {
	yield takeLatest(REQUEST_CREATE_FORM, requestCreateFormSaga);
}

/**
 * Reducer
 */

export type FormsStateType = FormType[];

type FormsActionsType = ActionType<
	| typeof createForm
	| typeof removeForm
	| typeof updateFormTitle
	| typeof createQuestion
	| typeof removeQuestion
	| typeof updateQuestionTitle
	| typeof createQuestionOption
	| typeof updateQuestionOption
	| typeof removeQuestionOption
	| typeof updateFormApplicationId
	| typeof saveFormDataId
	| typeof resetForms
	| typeof setForms
>;

const initialState: FormsStateType = [];

const forms = createReducer<FormsStateType, FormsActionsType>(initialState, {
	[CREATE_FORM]: (state, { payload }) =>
		produce(state, (draft) => {
			const form = new Form(payload.applicationId, payload.title);
			draft.push(form);
		}),
	[REMOVE_FORM]: (state, { payload }) =>
		produce(state, (draft) => {
			draft.splice(payload.formIdx, 1);
		}),
	[UPDATE_FORM_TITLE]: (state, { payload }) =>
		produce(state, (draft) => {
			draft[payload.formIdx].title = payload.title;
		}),
	[CREATE_QUESTION]: (state, { payload }) =>
		produce(state, (draft) => {
			const question = new Question(payload.questionType);
			draft[payload.formIdx].questionRequests.push(question);
		}),
	[REMOVE_QUESTION]: (state, { payload }) =>
		produce(state, (draft) => {
			/* At least 1 Question */
			if (draft[payload.formIdx].questionRequests.length === 1) return draft;
			draft[payload.formIdx].questionRequests.splice(payload.questionIdx, 1);
		}),
	[UPDATE_QUESTION_TITLE]: (state, { payload }) =>
		produce(state, (draft) => {
			draft[payload.formIdx].questionRequests[payload.questionIdx].content = payload.title;
		}),
	[CREATE_QUESTION_OPTION]: (state, { payload }) =>
		produce(state, (draft) => {
			draft[payload.formIdx].questionRequests[payload.questionIdx].questionOptionRequest.push('');
		}),
	[UPDATE_QUESTION_OPTION]: (state, { payload }) =>
		produce(state, (draft) => {
			/* prettier-ignore */
			draft[payload.formIdx].questionRequests[payload.questionIdx].questionOptionRequest[payload.optionIdx] = payload.title;
		}),
	[REMOVE_QUESTION_OPTION]: (state, { payload }) =>
		/* prettier-ignore */
		produce(state, (draft) => {
			/* At least 1 Option */
			if (draft[payload.formIdx].questionRequests[payload.questionIdx].questionOptionRequest.length === 1) return draft;
			draft[payload.formIdx].questionRequests[payload.questionIdx].questionOptionRequest.splice(payload.optionIdx, 1);
		}),
	[UPDATE_FORM_APPLICATION_ID]: (state, { payload }) =>
		produce(state, (draft) => {
			draft.forEach((form: FormType) => (form.applicationId = payload.applicationId));
		}),
	[SAVE_FORM_DATA_ID]: (state, { payload }) =>
		produce(state, (draft) => {
			draft[payload.formIdx].dataId = payload.dataId;
		}),
	[RESET_FORMS]: (state) => [],
	[SET_FORMS]: (state, { payload }) => produce(payload.forms, (draft) => draft),
});

export default forms;
