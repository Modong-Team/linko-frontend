import { call, select, takeLatest, put } from 'redux-saga/effects';
import { createAction, createReducer } from 'typesafe-actions';
import { getClubByMember } from '../../api/club';

/**
 * Action
 */

const SET_CLUB_DATA = 'clubData/SET_CLUB_DATA';
const REQUEST_SET_CLUB_DATA = 'clubData/REQUEST_SET_CLUB_DATA';
const REVOKE_CLUB_DATA = 'clubData/REVOKE_CLUB_DATA';

const setClubData = createAction(SET_CLUB_DATA, (clubData: ResponseClub.ClubData) => clubData)();
export const requestSetClubData = createAction(REQUEST_SET_CLUB_DATA)();
export const revokeClubData = createAction(REVOKE_CLUB_DATA)();

/**
 * Saga
 */

function* requestSetClubDataSaga() {
	const get: ResponseClub.GetByMember = yield call(getClubByMember);
	const clubData = get.data;
	yield put(setClubData(clubData));
}

export function* clubDataSaga() {
	yield takeLatest(REQUEST_SET_CLUB_DATA, requestSetClubDataSaga);
}

/**
 * Reducer
 */

type clubDataStateType = ResponseClub.ClubData | null;

const initialState = null;

const clubData = createReducer<clubDataStateType>(initialState, {
	[SET_CLUB_DATA]: (state, { payload }) => payload,
	[REVOKE_CLUB_DATA]: (state) => null,
});

export default clubData;
