import { createAction, createReducer } from 'typesafe-actions';

const SET_CLUB_DATA = 'clubData/SET_CLUB_DATA';
const REVOKE_CLUB_DATA = 'clubData/REVOKE_CLUB_DATA';

export const setClubData = createAction(SET_CLUB_DATA)();
export const revokeClubData = createAction(REVOKE_CLUB_DATA)();

type clubDataStateType = {
	clubId: number;
} | null;

const initialState = {
	clubId: 1,
	//...
};

const clubData = createReducer<clubDataStateType>(initialState, {
	[SET_CLUB_DATA]: (state, { payload }) => payload,
	[REVOKE_CLUB_DATA]: (state) => null,
});

export default clubData;
