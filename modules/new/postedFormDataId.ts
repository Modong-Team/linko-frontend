import produce from 'immer';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

/**
 * Action
 */

const ADD_POSTED_FORM_DATA_ID = 'postedFormDataId/SET_POSTED_FORM_DATA_ID';
const REMOVE_POSTED_FORM_DATA_ID = 'postedFormDataId/REMOVE_POSTED_FORM_DATA_ID';

export const addPostedFormDataId = createAction(
	ADD_POSTED_FORM_DATA_ID, //
	(dataId: number) => ({ dataId }),
)();

export const removePostedFormDataId = createAction(
	REMOVE_POSTED_FORM_DATA_ID, //
	(dataId: number) => ({ dataId }),
)();

/**
 * Reducer
 */

export type PostedFormDataIdStateType = number[];

type PostedFormDataIdActionsType = ActionType<
	| typeof addPostedFormDataId //
	| typeof removePostedFormDataId
>;

const initialState: PostedFormDataIdStateType = [];

const postedFormDataId = createReducer<PostedFormDataIdStateType, PostedFormDataIdActionsType>(
	initialState,
	{
		[ADD_POSTED_FORM_DATA_ID]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.push(payload.dataId);
			}),
		[REMOVE_POSTED_FORM_DATA_ID]: (state, { payload }) =>
			produce(state, (draft) => {
				const removeIdx = draft.findIndex((idx) => idx === payload.dataId);
				draft.splice(removeIdx, 1);
			}),
	},
);

export default postedFormDataId;
