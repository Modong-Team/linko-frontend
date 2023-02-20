/**
 * Action
 */

import { createAction, createReducer } from 'typesafe-actions';

const SET_APPLICANT = 'applicant/SET_APPLICANT';
const REVOKE_APPLICANT = 'applicant/REVOKE_APPLICANT';

export const setApplicant = createAction(
	SET_APPLICANT,
	(applicant: ResponseApplicant.Get) => applicant,
)();
export const revokeApplicant = createAction(REVOKE_APPLICANT)();

/**
 * Reducer
 */

export type ApplicantStateType = ResponseApplicant.Get | null;

const initialState: ApplicantStateType = null;

const applicant = createReducer<ApplicantStateType>(initialState, {
	[SET_APPLICANT]: (state, { payload }) => payload,
	[REVOKE_APPLICANT]: (state) => null,
});

export default applicant;
