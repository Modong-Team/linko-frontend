import { put, select, SelectEffect, takeLatest } from 'redux-saga/effects';
import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { RootState } from '..';
import produce from 'immer';
import { SelectedStatusStateType, selectStatus } from './selectedStatus';
import { ApplicantsStateType } from './applicants';
import { ApplicantStatusCodeKeys } from '../../constants/applicantStatusCode';

/**
 * Action
 */

const SELECT_APPLICANT = 'selectedApplicants/SELECT_APPLICANT';
const DESELECT_APPLICANT = 'selectedApplicants/DESELECT_APPLICANT';
const RESET_SELECTED_APPLICANTS = 'selectedApplicants/RESET_SELECTED_APPLICANTS';
const REQUEST_SELECT_APPLICANT = 'selectedApplicants/REQUEST_SELECT_APPLICANT';

const selectApplicant = createAction(
	SELECT_APPLICANT, //
	(applicantId: number) => ({
		applicantId,
	}),
)();
export const requestSelectApplicant = createAction(
	REQUEST_SELECT_APPLICANT, //
	(applicantId: number) => ({
		applicantId,
	}),
)();
export const deselectApplicant = createAction(
	DESELECT_APPLICANT, //
	(applicantId: number) => ({
		applicantId,
	}),
)();
export const resetSelectedApplicants = createAction(RESET_SELECTED_APPLICANTS)();

/**
 * Saga
 */

function selectState<T>(selector: (state: RootState) => T): SelectEffect {
	return select(selector);
}

function* requestSelectApplicantSaga({ payload }: ActionType<typeof requestSelectApplicant>) {
	const selectedStatus: SelectedStatusStateType = yield selectState<SelectedStatusStateType>(
		(state) => state.selectedStatus,
	);
	if (selectedStatus === null) {
		const applicants: ApplicantsStateType = yield selectState<ApplicantsStateType>(
			(state) => state.applicants,
		);
		const applicant = applicants?.data.find((applicant) => applicant.id === payload.applicantId);
		/* prettier-ignore */
		if (applicant) yield put(selectStatus(applicant.status as ValueOf<typeof ApplicantStatusCodeKeys>));
	}

	yield put(selectApplicant(payload.applicantId));
}

export function* selectedApplicantsSaga() {
	yield takeLatest(REQUEST_SELECT_APPLICANT, requestSelectApplicantSaga);
}

/**
 * Reducer
 */

export type SelectedApplicantsStatusStateType = number[];

type SelectedApplicantsStatusActionsType = ActionType<
	typeof selectApplicant | typeof deselectApplicant | typeof resetSelectedApplicants
>;

const initialState: SelectedApplicantsStatusStateType = [];

const selectedApplicants = createReducer<
	SelectedApplicantsStatusStateType,
	SelectedApplicantsStatusActionsType
>(initialState, {
	[SELECT_APPLICANT]: (state, { payload }) =>
		produce(state, (draft) => {
			draft.push(payload.applicantId);
		}),
	[DESELECT_APPLICANT]: (state, { payload }) =>
		produce(state, (draft) => {
			const idx = draft.findIndex((applicantId) => applicantId === payload.applicantId);
			draft.splice(idx, 1);
		}),
	[RESET_SELECTED_APPLICANTS]: (state) => [],
});

export default selectedApplicants;
