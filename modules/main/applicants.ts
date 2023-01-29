import { createAction, ActionType, createReducer } from 'typesafe-actions';

const SET_APPLICANTS = 'applicants/SET_APPLICANTS';

export const setApplicants = createAction(
	SET_APPLICANTS,
	(payload: ResponseApplicants.Get) => payload,
)();

export type ApplicantsStateType = ResponseApplicants.Get | null;

type ApplicantsActionType = ActionType<typeof setApplicants>;

const initialState: ApplicantsStateType = null;

const applicants = createReducer<ApplicantsStateType, ApplicantsActionType>(initialState, {
	[SET_APPLICANTS]: (state, { payload }) => payload,
});

export default applicants;
