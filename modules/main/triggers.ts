import { createAction, createReducer, ActionType } from 'typesafe-actions';

/**
 * Action
 */

const REFRESH_APPLICANTS = 'triggers/REFRESH_APPLICANTS';
const REFRESH_MEMOS = 'triggers/REFRESH_MEMOS';
const REFRESH_EVALUATIONS = 'triggers/REFRESH_EVALUATIONS';

export const refreshApplicants = createAction(REFRESH_APPLICANTS, (date: Date) => ({ date }))();
export const refreshMemos = createAction(REFRESH_MEMOS, (date: Date) => ({ date }))();
export const refreshEvaluations = createAction(REFRESH_EVALUATIONS, (date: Date) => ({ date }))();

/**
 * Reducer
 */

type TriggersStateType = {
	applicants: Date | null;
	memos: Date | null;
};

type TriggersActionsType = ActionType<
	| typeof refreshApplicants //
	| typeof refreshMemos
	| typeof refreshEvaluations
>;

const initialState = {
	applicants: null,
	memos: null,
	evaluations: null,
};

const triggers = createReducer<TriggersStateType, TriggersActionsType>(initialState, {
	[REFRESH_APPLICANTS]: (state, { payload }) => ({ ...state, applicants: payload.date }),
	[REFRESH_MEMOS]: (state, { payload }) => ({ ...state, memos: payload.date }),
	[REFRESH_EVALUATIONS]: (state, { payload }) => ({ ...state, evaluations: payload.date }),
});

export default triggers;
