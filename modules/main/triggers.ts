import { createAction, createReducer, ActionType } from 'typesafe-actions';

/**
 * Action
 */

const REFRESH_APPLICANTS = 'triggers/REFRESH_APPLICANTS';

export const refreshApplicants = createAction(REFRESH_APPLICANTS, (date: Date) => ({ date }))();

/**
 * Reducer
 */

type TriggersStateType = {
	applicants: Date | null;
};

type TriggersActionsType = ActionType<typeof refreshApplicants>;

const initialState = {
	applicants: null,
};

const triggers = createReducer<TriggersStateType, TriggersActionsType>(initialState, {
	[REFRESH_APPLICANTS]: (state, { payload }) => ({ ...state, applicants: payload.date }),
});

export default triggers;
