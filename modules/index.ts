import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import forms from './forms';

const rootReducer = combineReducers({ forms });

export function* rootSaga() {
	yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
