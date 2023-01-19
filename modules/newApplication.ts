import { ActionType, createAction, createReducer } from 'typesafe-actions';

/**
 * Action
 */

const SET_NEW_APPLICATION_CLUB_ID = 'newApplication/SET_NEW_APPLICATION_CLUB_ID';
const SET_NEW_APPLICATION_ESSENTIALS = 'newApplication/SET_NEW_APPLICATION_ESSENTIALS';
const SET_NEW_APPLICATION_TITLE = 'newApplication/SET_NEW_APPLICATION_TITLE';
const SET_NEW_APPLICATION_URL_ID = 'newApplication/SET_NEW_APPLICATION_URL_ID';

export const setNewApplicationClubId = createAction(
	SET_NEW_APPLICATION_CLUB_ID, //
	(clubId: number) => ({ clubId }),
)();
export const setNewApplicationEssentials = createAction(
	SET_NEW_APPLICATION_ESSENTIALS, //
	(essentials: number[]) => ({ essentials }),
)();
export const setNewApplicationTitle = createAction(
	SET_NEW_APPLICATION_TITLE, //
	(title: string) => ({ title }),
)();
export const setNewApplicationUrlId = createAction(
	SET_NEW_APPLICATION_URL_ID, //
	(urlId: string) => ({ urlId }),
)();

/**
 * Reducer
 */

type NewApplicationStateType = {
	clubId: number | null;
	essentialQuestionIds: number[];
	title: string;
	urlId: string | null;
};

type NewApplicationActionsType = ActionType<
	| typeof setNewApplicationClubId
	| typeof setNewApplicationEssentials
	| typeof setNewApplicationTitle
	| typeof setNewApplicationUrlId
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
		[SET_NEW_APPLICATION_ESSENTIALS]: (state, { payload }) => ({
			...state,
			essentialQuestionIds: payload.essentials,
		}),
		[SET_NEW_APPLICATION_TITLE]: (state, { payload }) => ({ ...state, title: payload.title }),
		[SET_NEW_APPLICATION_URL_ID]: (state, { payload }) => ({ ...state, urlId: payload.urlId }),
	},
);

export default newApplication;
