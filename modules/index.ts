import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import forms from './forms';
import newApplicationId from './newApplicationId';
import { formsSaga } from './forms';
import { newApplicationIdSaga } from './newApplicationId';
import newApplication from './newApplication';
import { newSaga } from './api/new';
import postedFormDataId from './api/postedFormDataId';
import newApi from './api/new';
import applicationTitleInputError from './applicationTitleInputError';

const rootReducer = combineReducers({
	forms,
	newApplicationId,
	newApplication,
	postedFormDataId,
	newApi,
	applicationTitleInputError,
});

export function* rootSaga() {
	yield all([formsSaga(), newApplicationIdSaga(), newSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
