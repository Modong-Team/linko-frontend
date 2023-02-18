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
import application from './reply/application';
import loadingStatus from './loading/loadingStatus';
import applicationId, { applicationIdSaga } from './main/applicationId';
import applicants from './main/applicants';
import selectedStatus from './main/selectedStatus';
import selectedApplicants from './main/selectedApplicants';
import { selectedStatusSaga } from './main/selectedStatus';
import filter from './main/filter';
import sort from './main/sort';
import triggers from './main/triggers';
import authData from './auth/authData';
import { authDataSaga } from './auth/authData';
import clubData from './auth/clubData';
import { clubDataSaga } from './auth/clubData';

const rootReducer = combineReducers({
	forms,
	newApplicationId,
	newApplication,
	postedFormDataId,
	newApi,
	applicationTitleInputError,
	answers,
	application,
	loadingStatus,
	applicationId,
	applicants,
	selectedStatus,
	selectedApplicants,
	sort,
	filter,
	triggers,
	authData,
	clubData,
});

export function* rootSaga() {
	yield all([
		formsSaga(),
		newApplicationIdSaga(),
		newSaga(),
		answersSaga(),
		applicationIdSaga(),
		selectedStatusSaga(),
		authDataSaga(),
		clubDataSaga(),
	]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
