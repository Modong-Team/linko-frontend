import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import newApplication from './new/newApplication';
import { newSaga } from './new/apiProcedures';
import postedFormDataId from './new/postedFormDataId';
import newApi from './new/apiProcedures';
import applicationTitleInputError from './new/applicationTitleInputError';
import forms, { formsSaga } from './new/forms';
import newApplicationId, { newApplicationIdSaga } from './new/newApplicationId';
import answers from './reply/answers';
import { answersSaga } from './reply/answers';

const rootReducer = combineReducers({
	forms,
	newApplicationId,
	newApplication,
	postedFormDataId,
	newApi,
	applicationTitleInputError,
	answers,
});

export function* rootSaga() {
	yield all([formsSaga(), newApplicationIdSaga(), newSaga(), answersSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
