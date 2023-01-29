import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { getApplicants } from '../../api/applicants';
import { setApplicants } from './applicants';
import { getApplication } from '../../api/application';
import { setApplication } from '../reply/application';
import { startGlobalLoading, finishGlobalLoading } from '../loading/loadingStatus';

/**
 * Action
 */

const SET_APPLICATION_ID = 'applicationId/SET_APPLICATION_ID';
const REQUEST_SET_APPLICATION_ID = 'applicationId/REQUEST_SET_APPLICATION_ID';

const setApplicationId = createAction(
	SET_APPLICATION_ID, //
	(applicationId: number) => ({ applicationId }),
)();

export const requestSetApplicationId = createAction(
	REQUEST_SET_APPLICATION_ID, //
	(applicationId: number) => ({ applicationId }),
)();

/**
 * Saga
 */

function* requestSetApplicationIdSaga({ payload }: ActionType<typeof requestSetApplicationId>) {
	yield put(startGlobalLoading());

	const applicationId = payload.applicationId;
	yield put(setApplicationId(applicationId));

	const applicants: ResponseApplicants.Get = yield call(() => getApplicants(applicationId));
	if (applicants) yield put(setApplicants(applicants));

	const application: ResponseApplication.Get = yield call(() => getApplication(applicationId));
	if (application) yield put(setApplication(application));

	yield delay(500);
	yield put(finishGlobalLoading());
}

export function* applicationIdSaga() {
	yield takeLatest(REQUEST_SET_APPLICATION_ID, requestSetApplicationIdSaga);
}

/**
 * Reducer
 */

export type ApplicationIdStateType = number | null;

type ApplicationIdActionsType = ActionType<typeof setApplicationId>;

const initialState: ApplicationIdStateType = null;

const applicationId = createReducer<ApplicationIdStateType, ApplicationIdActionsType>(
	initialState,
	{
		[SET_APPLICATION_ID]: (state, { payload }) => payload.applicationId,
	},
);

export default applicationId;
