import { createAction, ActionType, createReducer } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { Answers } from '../../models/answers';
import { EssentialAnswer } from '../../models/essentialAnswer';
import { QuestionAnswer } from '../../models/questionAnswer';
import produce from 'immer';
/**
 * Action
 */

const REQUEST_CREATE_ANSWERS = 'answers/REQUEST_CREATE_ANSWERS';
const CREATE_ANSWERS = 'answers/CREATE_ANSWERS';
const UPDATE_NAME = 'answers/UPDATE_NAME';
const UPDATE_ESSENTIAL_ANSWER = 'answers/UPDATE_ESSENTIAL_ANSWER';
const UPDATE_QUESTION_ANSWER = 'answers/UPDATE_QUESTION_ANSWER';

const createAnswers = createAction(
	CREATE_ANSWERS, //
	(payload: AnswersStateType) => payload,
)();
export const requestCreateAnswers = createAction(
	REQUEST_CREATE_ANSWERS,
	(payload: ResponseApplication.Get) => payload,
)();
export const updateName = createAction(
	UPDATE_NAME, //
	(name: string) => ({ name }),
)();
export const updateEssentialAnswer = createAction(
	UPDATE_ESSENTIAL_ANSWER,
	(essentialQuestionId: number, answer: string) => ({ essentialQuestionId, answer }),
)();
export const updateQuestionAnswer = createAction(
	UPDATE_QUESTION_ANSWER,
	(questionId: number, answer: string) => ({ questionId, answer }),
)();

/**
 * Saga
 */

function* requestCreateAnswersSaga({
	payload,
}: ActionType<typeof requestCreateAnswers>): Generator<any> {
	const answers = new Answers();
	const data = payload.data;

	const applicationId = data.id;
	answers.applicationId = applicationId;

	const essentialQuestions = data.essentialQuestions;
	essentialQuestions.forEach((essential) => {
		const answer = new EssentialAnswer('', essential.id);
		answers.essentialAnswers.push(answer);
	});

	const forms = data.forms;
	forms.forEach((form) =>
		form.questions.forEach((question) => {
			const answer = new QuestionAnswer('', question.id);
			answers.questionAnswers.push(answer);
		}),
	);

	yield put(createAnswers(answers));
}

export function* answersSaga() {
	yield takeLatest(REQUEST_CREATE_ANSWERS, requestCreateAnswersSaga);
}

/**
 * Reducer
 */

export type AnswersStateType = RequestApplicant.Post;

type AnswersActionsType = ActionType<
	| typeof createAnswers
	| typeof updateName
	| typeof updateEssentialAnswer
	| typeof updateQuestionAnswer
>;

const initialState: AnswersStateType = {
	applicationId: null,
	name: '',
	essentialAnswers: [],
	questionAnswers: [],
};

const answers = createReducer<AnswersStateType, AnswersActionsType>(initialState, {
	[CREATE_ANSWERS]: (state, { payload }) => payload,
	[UPDATE_NAME]: (state, { payload }) =>
		produce(state, (draft) => {
			draft.name = payload.name;
		}),
	[UPDATE_ESSENTIAL_ANSWER]: (state, { payload }) =>
		produce(state, (draft) => {
			const target = draft.essentialAnswers.find(
				(answer) => answer.essentialQuestionId === payload.essentialQuestionId,
			);
			if (target) target.answer = payload.answer;
		}),
	[UPDATE_QUESTION_ANSWER]: (state, { payload }) =>
		produce(state, (draft) => {
			const target = draft.questionAnswers.find(
				(answer) => answer.questionId === payload.questionId,
			);
			if (target) target.answer = payload.answer;
		}),
});

export default answers;
