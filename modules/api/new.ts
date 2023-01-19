import { call, put, select, SelectEffect, takeLatest } from 'redux-saga/effects';
import { createAction } from 'typesafe-actions';
import { v4 as uuid } from 'uuid';
import { RootState } from '../index';
import {
	setNewApplicationClubId,
	setNewApplicationUrlId,
	NewApplicationStateType,
} from '../newApplication';
import { postApplication, putApplication } from '../../api/application';
import { requestSetNewApplicationId, NewApplicationIdStateType } from '../newApplicationId';
import { postForm, putForm, deleteForm } from '../../api/form';
import { saveFormDataId, updateFormApplicationId, FormsStateType } from '../forms';
import {
	addPostedFormDataId,
	removePostedFormDataId,
	PostedFormDataIdStateType,
} from './postedFormDataId';

const REQUEST_NEW = 'new/REQUEST_NEW';

export const requestNew = createAction(REQUEST_NEW)();

function selectState<T>(selector: (state: RootState) => T): SelectEffect {
	return select(selector);
}

function* requestNewSaga() {
	{
		/* Set clubId & urlId */
		const newApplication: NewApplicationStateType = yield selectState<NewApplicationStateType>(
			(state) => state.newApplication,
		);

		if (!newApplication.clubId) {
			yield put(setNewApplicationClubId(1));
			console.log('set');
		}
		if (!newApplication.urlId) {
			const urlId = uuid();
			yield put(setNewApplicationUrlId(urlId));
			console.log('set');
		}
	}

	{
		/* Post application & set newApplicationId
		 * OR
		 * Put application by saved newApplicationId */
		const newApplication: NewApplicationStateType = yield selectState<NewApplicationStateType>(
			(state) => state.newApplication,
		);
		const newApplicationId: NewApplicationIdStateType =
			yield selectState<NewApplicationIdStateType>((state) => state.newApplicationId);

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
	}

	{
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
	}

	{
		/* Delete Forms */
		const forms: FormsStateType = yield selectState<FormsStateType>((state) => state.forms);
		const postedFormDataId: PostedFormDataIdStateType =
			yield selectState<PostedFormDataIdStateType>((state) => state.postedFormDataId);

		const deleteTargets = postedFormDataId.filter(
			(dataId) => !forms.map((form) => form.dataId).includes(dataId),
		);
		for (const dataId of deleteTargets) {
			const deleted: ResponseForm.Delete = yield call(() => deleteForm(dataId));
			console.log(deleted);
			yield put(removePostedFormDataId(dataId));
		}
	}
}

export function* newSaga() {
	yield takeLatest(REQUEST_NEW, requestNewSaga);
}
