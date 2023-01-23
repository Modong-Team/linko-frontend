import { ActionType, createAction, createReducer } from 'typesafe-actions';

/**
 * Action
 */

const SET_APPLICATION_TITLE_INPUT_ERROR =
	'applicationTitleInputError/SET_APPLICATION_TITLE_INPUT_ERROR';

export const setApplicationTitleInputError = createAction(
	SET_APPLICATION_TITLE_INPUT_ERROR, //
	(isError: boolean) => ({ isError }),
)();

/**
 * Reducer
 */

export type ApplicationTitleInputErrorStateType = boolean;

type ApplicationTitleInputErrorActionsType = ActionType<typeof setApplicationTitleInputError>;

const initialState: ApplicationTitleInputErrorStateType = false;

const applicationTitleInputError = createReducer<
	ApplicationTitleInputErrorStateType,
	ApplicationTitleInputErrorActionsType
>(initialState, {
	[SET_APPLICATION_TITLE_INPUT_ERROR]: (state, { payload }) => payload.isError,
});

export default applicationTitleInputError;
