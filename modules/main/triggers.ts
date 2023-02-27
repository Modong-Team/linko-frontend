import { createAction, createReducer, ActionType } from 'typesafe-actions';

/**
 * Action
 */

const REFRESH_APPLICANTS = 'triggers/REFRESH_APPLICANTS';
const REFRESH_MEMOS = 'triggers/REFRESH_MEMOS';
const REFRESH_EVALUATIONS = 'triggers/REFRESH_EVALUATIONS';
const REFRESH_APPLICANT = 'triggers/REFRESH_APPLICANT';
const REFRESH_MAIN = 'triggers/REFRESH_MAIN';

export const refreshApplicants = createAction(REFRESH_APPLICANTS, (date: Date) => ({ date }))();
export const refreshMemos = createAction(REFRESH_MEMOS, (date: Date) => ({ date }))();
export const refreshEvaluations = createAction(REFRESH_EVALUATIONS, (date: Date) => ({ date }))();
export const refreshApplicant = createAction(REFRESH_APPLICANT, (date: Date) => ({ date }))();
export const refreshMain = createAction(REFRESH_MAIN, (date: Date) => ({ date }))();

/**
 * Reducer
 */

type TriggersStateType = {
	applicants: Date | null;
	memos: Date | null;
	evaluations: Date | null;
	applicant: Date | null;
	main: Date | null;
};

type TriggersActionsType = ActionType<
	| typeof refreshApplicants //
	| typeof refreshMemos
	| typeof refreshEvaluations
	| typeof refreshApplicant
	| typeof refreshMain
>;

const initialState = {
	applicants: null,
	memos: null,
	evaluations: null,
	applicant: null,
	main: null,
};

const triggers = createReducer<TriggersStateType, TriggersActionsType>(initialState, {
	[REFRESH_APPLICANTS]: (state, { payload }) => ({ ...state, applicants: payload.date }),
	[REFRESH_MEMOS]: (state, { payload }) => ({ ...state, memos: payload.date }),
	[REFRESH_EVALUATIONS]: (state, { payload }) => ({ ...state, evaluations: payload.date }),
	[REFRESH_APPLICANT]: (state, { payload }) => ({ ...state, applicant: payload.date }),
	[REFRESH_MAIN]: (state, { payload }) => ({ ...state, main: payload.date }),
});

export default triggers;
