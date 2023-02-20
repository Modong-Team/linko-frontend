import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getApplicant } from '../../api/applicant';
import { setApplicant, revokeApplicant } from './applicant';
import { requestSetApplicationId } from '../main/applicationId';

/**
 * Action
 */

const SET_APPICANT_ID = 'applicantId/SET_APPICANT_ID';
const REVOKE_APPICANT_ID = 'applicantId/REVOKE_APPICANT_ID';
const REQUEST_SET_APPICANT_ID = 'applicantId/REQUEST_SET_APPICANT_ID';
const REQUEST_REVOKE_APPICANT_ID = 'applicantId/REQUEST_REVOKE_APPICANT_ID';

const setApplicantId = createAction(
	SET_APPICANT_ID, //
	(applicantId: number) => applicantId,
)();
const revokeApplicantId = createAction(REVOKE_APPICANT_ID)();
export const requestSetApplicantId = createAction(
	REQUEST_SET_APPICANT_ID,
	(applicantId: number) => applicantId,
)();
export const requestRevokeApplicantId = createAction(REQUEST_REVOKE_APPICANT_ID)();

/**
 * Saga
 */

function* requestSetApplicantIdSaga({ payload }: ActionType<typeof requestSetApplicantId>) {
	const applicant: ResponseApplicant.Get = yield call(() => getApplicant(payload));
	yield put(setApplicant(applicant));
	yield put(setApplicantId(payload));
	yield put(requestSetApplicationId(applicant.data.applicationId));
}

function* requestRevokeApplicantIdSaga() {
	yield put(revokeApplicant());
	yield put(revokeApplicantId());
}

export function* applicantIdSaga() {
	yield takeLatest(REQUEST_SET_APPICANT_ID, requestSetApplicantIdSaga);
	yield takeLatest(REQUEST_REVOKE_APPICANT_ID, requestRevokeApplicantIdSaga);
}

/**
 * Reducer
 */

type ApplicantIdStateType = number | null;

const initialState: ApplicantIdStateType = null;

const applicantId = createReducer<ApplicantIdStateType>(initialState, {
	[SET_APPICANT_ID]: (state, { payload }) => payload,
	[REVOKE_APPICANT_ID]: (state) => null,
});

export default applicantId;
