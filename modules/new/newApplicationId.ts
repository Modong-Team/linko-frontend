import { put, takeLatest } from 'redux-saga/effects';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

/**
 * Action
 */

const SET_NEW_APPLICATION_ID = 'newApplicationId/SET_NEW_APPLICATION_ID';
const REQUEST_SET_NEW_APPLICATION_ID = 'newApplicationId/REQUEST_SET_NEW_APPLICATION_ID';
const RESET_NEW_APPLICATION_ID = 'newApplicationId/RESET_NEW_APPLICATION_ID';

const setNewApplicationId = createAction(
	SET_NEW_APPLICATION_ID, //
	(applicationId: number) => ({ applicationId }),
)();
export const requestSetNewApplicationId = createAction(
	REQUEST_SET_NEW_APPLICATION_ID, //
	(applicationId: number) => ({ applicationId }),
)();
export const resetNewApplicationId = createAction(RESET_NEW_APPLICATION_ID)();

/**
 * Saga
 */

function* requestSetNewApplicationIdSaga({
	payload,
}: ActionType<typeof requestSetNewApplicationId>) {
	yield put(setNewApplicationId(payload.applicationId));
}

export function* newApplicationIdSaga() {
	yield takeLatest(REQUEST_SET_NEW_APPLICATION_ID, requestSetNewApplicationIdSaga);
}

/**
 * Reducer
 */

export type NewApplicationIdStateType = number | null;

type NewApplicationIdActionsType = ActionType<
	| typeof setNewApplicationId //
	| typeof resetNewApplicationId
>;

const initialState: NewApplicationIdStateType = null;

const newApplicationId = createReducer<NewApplicationIdStateType, NewApplicationIdActionsType>(
	initialState,
	{
		[SET_NEW_APPLICATION_ID]: (state, { payload }) => payload.applicationId,
		[RESET_NEW_APPLICATION_ID]: (state) => null,
	},
);

export default newApplicationId;
