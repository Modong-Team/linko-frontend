import { createReducer, createAction, ActionType } from 'typesafe-actions';
/**
 * Action
 */

const START_LOADING = 'loadingStatus/START_LOADING';
const FINISH_LOADING = 'loadingStatus/START_LOADING';

export const startLoading = createAction(START_LOADING)();
export const finishLoading = createAction(FINISH_LOADING)();

/**
 * Reducer
 */

export type LoadingStatusStateType = {
	isLoading: boolean;
};

type LoadingStatusActionType = ActionType<
	| typeof startLoading //
	| typeof finishLoading
>;

const initialState = {
	isLoading: false,
};

const loadingStatus = createReducer<LoadingStatusStateType, LoadingStatusActionType>(initialState, {
	[START_LOADING]: (state) => ({ ...state, isLoading: true }),
	[FINISH_LOADING]: (state) => ({ ...state, isLoading: false }),
});

export default loadingStatus;
