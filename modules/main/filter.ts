import { createAction, createReducer } from 'typesafe-actions';

/**
 * Action
 */

const FILTER_ALL = 'filter/FILTER_ALL';
const FILTER_EVALUATING = 'filter/FILTER_EVALUATING';
const FILTER_FAIL = 'filter/FILTER_FAIL';

export const filterAll = createAction(FILTER_ALL)();
export const filterEvaluating = createAction(FILTER_EVALUATING)();
export const filterFail = createAction(FILTER_FAIL)();

/**
 * Reducer
 */

type FilterStateType = 'all' | 'evaluating' | 'fail';

const initialState: FilterStateType = 'all';

const filter = createReducer<FilterStateType>(initialState, {
	[FILTER_ALL]: (state) => 'all',
	[FILTER_EVALUATING]: (state) => 'evaluating',
	[FILTER_FAIL]: (state) => 'fail',
});

export default filter;
