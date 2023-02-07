import { createAction, createReducer } from 'typesafe-actions';

/**
 * Action
 */

const SORT_NAME_ASC = 'sort/SORT_NAME_ASC';
const SORT_RATE_ASC = 'sort/SORT_RATE_ASC';
const SORT_RATE_DESC = 'sort/SORT_RATE_DESC';

export const sortNameAsc = createAction(SORT_NAME_ASC)();
export const sortRateAsc = createAction(SORT_RATE_ASC)();
export const sortRateDesc = createAction(SORT_RATE_DESC)();

/**
 * Reducer
 */

type SortStateType = 'name,asc' | 'rate,asc' | 'rate,desc';

const initialState: SortStateType = 'name,asc';

const sort = createReducer<SortStateType>(initialState, {
	[SORT_NAME_ASC]: (state) => 'name,asc',
	[SORT_RATE_ASC]: (state) => 'rate,asc',
	[SORT_RATE_DESC]: (state) => 'rate,desc',
});

export default sort;
