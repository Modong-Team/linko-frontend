import { createAction, createReducer, ActionType } from 'typesafe-actions';

/**
 * Action
 */

const REFRESH_APPLICANTS = 'triggers/REFRESH_APPLICANTS';
const REFRESH_MEMOS = 'triggers/REFRESH_MEMOS';

export const refreshApplicants = createAction(REFRESH_APPLICANTS, (date: Date) => ({ date }))();
export const refreshMemos = createAction(REFRESH_MEMOS, (date: Date) => ({ date }))();

/**
 * Reducer
 */

type TriggersStateType = {
	applicants: Date | null;
	memos: Date | null;
};

type TriggersActionsType = ActionType<typeof refreshApplicants | typeof refreshMemos>;

const initialState = {
	applicants: null,
	memos: null,
};

const triggers = createReducer<TriggersStateType, TriggersActionsType>(initialState, {
	[REFRESH_APPLICANTS]: (state, { payload }) => ({ ...state, applicants: payload.date }),
	[REFRESH_MEMOS]: (state, { payload }) => ({ ...state, memos: payload.date }),
});

export default triggers;
