import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import forms from './forms';
import newApplicationId from './newApplicationId';
import { formsSaga } from './forms';
import { newApplicationIdSaga } from './newApplicationId';

const rootReducer = combineReducers({ forms, newApplicationId });

export function* rootSaga() {
	yield all([formsSaga(), newApplicationIdSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
