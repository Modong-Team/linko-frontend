import { createAction, ActionType, createReducer } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { StorageKeys } from '../../constants/keys';

/**
 * Action
 */

const SET_AUTH_DATA = 'authData/SET_AUTH_DATA';
const REQUEST_SET_AUTH_DATA = 'authData/REQUEST_SET_AUTH_DATA';

const setAuthData = createAction(
	SET_AUTH_DATA, //
	(data: ResponseLogin.Data) => ({ data }),
)();
export const requestSetAuthData = createAction(
	REQUEST_SET_AUTH_DATA,
	(data: ResponseLogin.Data) => ({ data }),
)();

/**
 * Saga
 */

function* requestSetAuthDataSaga({ payload }: ActionType<typeof requestSetAuthData>) {
	const authData = payload.data;
	sessionStorage.setItem(StorageKeys.refreshToken, authData.refreshToken);
	yield put(setAuthData(authData));
}

export function* authDataSaga() {
	yield takeLatest(REQUEST_SET_AUTH_DATA, requestSetAuthDataSaga);
}

/**
 * Reducer
 */

type AuthDataStateType = ResponseLogin.Data | null;

type AuthDataActionsType = ActionType<typeof setAuthData>;

const initialState = null;

const authData = createReducer<AuthDataStateType, AuthDataActionsType>(initialState, {
	[SET_AUTH_DATA]: (state, { payload }) => payload.data,
});

export default authData;
