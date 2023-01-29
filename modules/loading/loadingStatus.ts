import { createReducer, createAction, ActionType } from 'typesafe-actions';
/**
 * Action
 */

const START_GLOBAL_LOADING = 'loadingStatus/START_GLOBAL_LOADING';
const FINISH_GLOBAL_LOADING = 'loadingStatus/FINISH_GLOBAL_LOADING';

export const startGlobalLoading = createAction(START_GLOBAL_LOADING)();
export const finishGlobalLoading = createAction(FINISH_GLOBAL_LOADING)();

/**
 * Reducer
 */

export type LoadingStatusStateType = {
	isGlobalLoading: boolean;
};

type LoadingStatusActionType = ActionType<
	| typeof startGlobalLoading //
	| typeof finishGlobalLoading
>;

const initialState = {
	isGlobalLoading: false,
};

const loadingStatus = createReducer<LoadingStatusStateType, LoadingStatusActionType>(initialState, {
	[START_GLOBAL_LOADING]: (state) => ({ isGlobalLoading: true }),
	[FINISH_GLOBAL_LOADING]: (state) => ({ isGlobalLoading: false }),
});

export default loadingStatus;
