import { ActionType, createAction, createReducer } from 'typesafe-actions';
import produce from 'immer';

/**
 * Action
 */

const SELECT_APPLICANT = 'selectedApplicants/SELECT_APPLICANT';
const DESELECT_APPLICANT = 'selectedApplicants/DESELECT_APPLICANT';
const RESET_SELECTED_APPLICANTS = 'selectedApplicants/RESET_SELECTED_APPLICANTS';

export const selectApplicant = createAction(
	SELECT_APPLICANT, //
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
