import { put, takeLatest } from 'redux-saga/effects';
import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { ApplicantStatusCodeKeys } from '../../constants/applicantStatusCode';
import { resetSelectedApplicants } from './selectedApplicants';

/**
 * Action
 */

const SELECT_STATUS = 'selectedStatus/SELECT_STATUS';
const RESET_STATUS = 'selectedStatus/RESET_STATUS';
const REQUEST_RESET_STATUS = 'selectedStatus/REQUEST_RESET_STATUS';

export const selectStatus = createAction(
	SELECT_STATUS, //
	(applicantStatusCode: typeof ApplicantStatusCodeKeys[keyof typeof ApplicantStatusCodeKeys]) => ({
		applicantStatusCode,
	}),
)();

const resetStatus = createAction(RESET_STATUS)();

export const requestResetStatus = createAction(REQUEST_RESET_STATUS)();

/**
 * Saga
 */

function* requestResetStatusSaga() {
	yield put(resetSelectedApplicants());
	yield put(resetStatus());
}

export function* selectedStatusSaga() {
	yield takeLatest(REQUEST_RESET_STATUS, requestResetStatusSaga);
}

/**
 * Reducer
 */

export type SelectedStatusStateType =
	| typeof ApplicantStatusCodeKeys[keyof typeof ApplicantStatusCodeKeys]
	| null;

type SelectedStatusActionsType = ActionType<typeof selectStatus | typeof resetStatus>;

const initialState: SelectedStatusStateType = null;

const selectedStatus = createReducer<SelectedStatusStateType, SelectedStatusActionsType>(
	initialState,
	{
		[SELECT_STATUS]: (state, { payload }) => payload.applicantStatusCode,
		[RESET_STATUS]: (state) => null,
	},
);

export default selectedStatus;
