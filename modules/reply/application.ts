import { createAction, ActionType, createReducer } from 'typesafe-actions';

const SET_APPLICATION = 'application/SET_APPLICATION';

export const setApplication = createAction(
	SET_APPLICATION,
	(payload: ResponseApplication.Get) => payload,
)();

export type ApplicationStateType = ResponseApplication.Get | null;

type ApplicationAnswersType = ActionType<typeof setApplication>;

const initialState: ApplicationStateType = null;

const application = createReducer<ApplicationStateType, ApplicationAnswersType>(initialState, {
	[SET_APPLICATION]: (state, { payload }) => payload,
});

export default application;
