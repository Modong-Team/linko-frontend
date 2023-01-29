import { call, put, select, SelectEffect, takeLatest } from 'redux-saga/effects';
import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { v4 as uuid } from 'uuid';
import { RootState } from '../index';
import {
	setNewApplicationClubId,
	setNewApplicationUrlId,
	NewApplicationStateType,
} from './newApplication';
import { postApplication, putApplication } from '../../api/application';
import {
	addPostedFormDataId,
	removePostedFormDataId,
	PostedFormDataIdStateType,
} from './postedFormDataId';
import { setApplicationTitleInputError } from './applicationTitleInputError';
import { postForm, putForm, deleteForm } from '../../api/form';
import { updateFormApplicationId, FormsStateType, saveFormDataId } from './forms';
import { NewApplicationIdStateType, requestSetNewApplicationId } from './newApplicationId';

const REQUEST_SAVE = 'new/REQUEST_SAVE';
const GO_THROUGH_PREPROCESS = 'new/START_PREPROCESS';
const POST_OR_PUT_APPLICATION = 'new/POST_OR_PUT_APPLICATION';
const POST_OR_PUT_FORMS = 'new/POST_OR_PUT_FORMS';
const DELETE_REMOVED_FORMS = 'new/DELETE_REMOVED_FORMS';
const SET_IS_LOADING = 'new/SET_IS_LOADING';

export const requestSave = createAction(REQUEST_SAVE)();
const goThroughPreprocess = createAction(GO_THROUGH_PREPROCESS)();
const postOrPutApplication = createAction(POST_OR_PUT_APPLICATION)();
const postOrPutForms = createAction(POST_OR_PUT_FORMS)();
const deleteRemoveForms = createAction(DELETE_REMOVED_FORMS)();
const setIsLoading = createAction(SET_IS_LOADING, (isLoading: boolean) => ({ isLoading }))();

function selectState<T>(selector: (state: RootState) => T): SelectEffect {
	return select(selector);
}

function* requestSaveSaga() {
	yield put(setIsLoading(true));
	yield put(goThroughPreprocess());
}

function* goThroughPreprocessSaga() {
	const newApplication: NewApplicationStateType = yield selectState<NewApplicationStateType>(
		(state) => state.newApplication,
	);

	/* Validation */
	if (newApplication.title.replaceAll(' ', '') === '') {
		yield put(setApplicationTitleInputError(true));
		yield put(setIsLoading(false));
		return;
	}

	/* Set clubId & urlId */
	if (!newApplication.clubId) {
		yield put(setNewApplicationClubId(1));
		console.log('set');
	}
	if (!newApplication.urlId) {
		const urlId = uuid();
		yield put(setNewApplicationUrlId(urlId));
		console.log('set');
	}

	yield put(postOrPutApplication());
}

function* postOrPutApplicationSaga() {
	/* Post application & set newApplicationId
	 * OR
	 * Put application by saved newApplicationId */
	const newApplication: NewApplicationStateType = yield selectState<NewApplicationStateType>(
		(state) => state.newApplication,
	);
	const newApplicationId: NewApplicationIdStateType = yield selectState<NewApplicationIdStateType>(
		(state) => state.newApplicationId,
	);

	if (!newApplicationId) {
		const post: ResponseApplication.Post = yield call(() => postApplication(newApplication));
		console.log('post', post);
		yield put(requestSetNewApplicationId(post.data.id));
		yield put(updateFormApplicationId(post.data.id));
	}
	if (newApplicationId) {
		/* prettier-ignore */
		const put: ResponseApplication.Put = yield call(() => putApplication(newApplicationId, newApplication));
		console.log('put', put);
	}

	yield put(postOrPutForms());
}

function* postOrPutFormsSaga() {
	/* Post Forms OR Put Forms */
	const forms: FormsStateType = yield selectState<FormsStateType>((state) => state.forms);

	for (const [formIdx, form] of forms.entries()) {
		if (!form.dataId) {
			const copy = { ...form };
			delete copy.dataId;
			console.log(copy);
			const post: ResponseForm.Post = yield call(() => postForm(copy));
			console.log('post', post);
			/* Save dataId of form */
			yield put(saveFormDataId(formIdx, post.data.id));
			yield put(addPostedFormDataId(post.data.id));
		}
		if (form.dataId) {
			const dataId = form.dataId;
			const copy = { ...form };
			delete copy.dataId;
			const put: ResponseForm.Put = yield call(() => putForm(dataId, copy));
			console.log('put', put);
		}
	}

	yield put(deleteRemoveForms());
}

function* deleteRemoveFormsSaga() {
	/* Delete Forms */
	const forms: FormsStateType = yield selectState<FormsStateType>((state) => state.forms);
	const postedFormDataId: PostedFormDataIdStateType = yield selectState<PostedFormDataIdStateType>(
		(state) => state.postedFormDataId,
	);

	const deleteTargets = postedFormDataId.filter(
		(dataId) => !forms.map((form) => form.dataId).includes(dataId),
	);
	for (const dataId of deleteTargets) {
		const deleted: ResponseForm.Delete = yield call(() => deleteForm(dataId));
		console.log(deleted);
		yield put(removePostedFormDataId(dataId));
	}
	yield put(setIsLoading(false));
}

export function* newSaga() {
	yield takeLatest(REQUEST_SAVE, requestSaveSaga);
	yield takeLatest(GO_THROUGH_PREPROCESS, goThroughPreprocessSaga);
	yield takeLatest(POST_OR_PUT_APPLICATION, postOrPutApplicationSaga);
	yield takeLatest(POST_OR_PUT_FORMS, postOrPutFormsSaga);
	yield takeLatest(DELETE_REMOVED_FORMS, deleteRemoveFormsSaga);
}

type NewStateType = {
	isLoading: boolean;
};

type NewActionsType = ActionType<typeof setIsLoading>;

const initialState: NewStateType = {
	isLoading: false,
};

const newApi = createReducer<NewStateType, NewActionsType>(initialState, {
	[SET_IS_LOADING]: (state, { payload }) => ({ isLoading: payload.isLoading }),
});

export default newApi;
