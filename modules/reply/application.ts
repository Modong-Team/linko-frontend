import { createAction, ActionType, createReducer } from 'typesafe-actions';

const SET_APPLICATION = 'application/SET_APPLICATION';

export const setApplication = createAction(
	SET_APPLICATION,
	(payload: ResponseApplication.Get) => payload,
)();

export type ApplicationStateType = ResponseApplication.Get;

type ApplicationAnswersType = ActionType<typeof setApplication>;

const initialState: ApplicationStateType = {
	status: 0,
	message: '',
	code: '',
	data: {
		id: 0,
		title: '',
		urlId: '',
		essentialQuestions: [],
		forms: [],
	},
};

const application = createReducer<ApplicationStateType, ApplicationAnswersType>(initialState, {
	[SET_APPLICATION]: (state, { payload }) => payload,
});

export default application;
