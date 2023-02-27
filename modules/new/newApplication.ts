import { ActionType, createAction, createReducer } from 'typesafe-actions';
import produce from 'immer';

/**
 * Action
 */

const SET_NEW_APPLICATION_CLUB_ID = 'newApplication/SET_NEW_APPLICATION_CLUB_ID';
const ADD_NEW_APPLICATION_ESSENTIAL = 'newApplication/ADD_NEW_APPLICATION_ESSENTIAL';
const REMOVE_NEW_APPLICATION_ESSENTIAL = 'newApplication/REMOVE_NEW_APPLICATION_ESSENTIAL';
const SET_NEW_APPLICATION_TITLE = 'newApplication/SET_NEW_APPLICATION_TITLE';
const SET_NEW_APPLICATION_URL_ID = 'newApplication/SET_NEW_APPLICATION_URL_ID';
const RESET_NEW_APPLICATION = 'newApplication/RESET_NEW_APPLICATION';

export const setNewApplicationClubId = createAction(
	SET_NEW_APPLICATION_CLUB_ID, //
	(clubId: number) => ({ clubId }),
)();
export const addNewApplicationEssential = createAction(
	ADD_NEW_APPLICATION_ESSENTIAL, //
	(essentialIdx: number) => ({ essentialIdx }),
)();
export const removeNewApplicationEssential = createAction(
	REMOVE_NEW_APPLICATION_ESSENTIAL, //
	(essentialIdx: number) => ({ essentialIdx }),
)();
export const setNewApplicationTitle = createAction(
	SET_NEW_APPLICATION_TITLE, //
	(title: string) => ({ title }),
)();
export const setNewApplicationUrlId = createAction(
	SET_NEW_APPLICATION_URL_ID, //
	(urlId: string) => ({ urlId }),
)();
export const resetNewApplication = createAction(RESET_NEW_APPLICATION)();

/**
 * Reducer
 */

export type NewApplicationStateType = {
	clubId: number | null;
	essentialQuestionIds: number[];
	title: string;
	urlId: string | null;
};

type NewApplicationActionsType = ActionType<
	| typeof setNewApplicationClubId
	| typeof addNewApplicationEssential
	| typeof removeNewApplicationEssential
	| typeof setNewApplicationTitle
	| typeof setNewApplicationUrlId
	| typeof resetNewApplication
>;

const initialState: NewApplicationStateType = {
	clubId: null,
	essentialQuestionIds: [1, 2, 3],
	title: '',
	urlId: null,
};

const newApplication = createReducer<NewApplicationStateType, NewApplicationActionsType>(
	initialState,
	{
		[SET_NEW_APPLICATION_CLUB_ID]: (state, { payload }) => ({ ...state, clubId: payload.clubId }),
		[ADD_NEW_APPLICATION_ESSENTIAL]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.essentialQuestionIds.push(payload.essentialIdx);
			}),
		[REMOVE_NEW_APPLICATION_ESSENTIAL]: (state, { payload }) =>
			produce(state, (draft) => {
				/* prettier-ignore */
				const removeIdx = draft.essentialQuestionIds.findIndex((idx) => idx === payload.essentialIdx);
				draft.essentialQuestionIds.splice(removeIdx, 1);
			}),
		[SET_NEW_APPLICATION_TITLE]: (state, { payload }) => ({ ...state, title: payload.title }),
		[SET_NEW_APPLICATION_URL_ID]: (state, { payload }) => ({ ...state, urlId: payload.urlId }),
		[RESET_NEW_APPLICATION]: (state) => produce(initialState, (draft) => draft),
	},
);

export default newApplication;
