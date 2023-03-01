import axios, { AxiosRequestConfig } from 'axios';
import { ExtendedError, GenericInstance } from '../../@types/axios/core';
import { store } from '../../pages/_app';
import { postToken } from '../token';
import { StorageKeys } from '../../constants/keys';
import { requestSetAuthData } from '../../modules/auth/authData';
import { ResponseCodes } from '../../constants/responseCodes';
import { Paths } from '../../constants/paths';

const request: GenericInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
	timeout: 2500,
	headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use(
	(config) => {
		const authToken = store.getState().authData?.accessToken;
		if (authToken) setAuthorizedConfig(config, authToken);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error: ExtendedError) => {
		handleError(error);
		return Promise.reject(error);
	},
);

const setAuthorizedConfig = (config: AxiosRequestConfig, authToken: string) => {
	config.headers = { Authorization: `Bearer ${authToken}` };
	config.withCredentials = true;
};

const silentRefresh = async (config: AxiosRequestConfig) => {
	const refreshToken = sessionStorage.getItem(StorageKeys.refreshToken);
	if (!refreshToken) return;
	const authData = await postToken({ refreshToken });
	store.dispatch(requestSetAuthData(authData.data));
	await request.request(config);
};

const handleError = (error: ExtendedError) => {
	switch (error.response.status) {
		case ResponseCodes.unauthorized:
			history.go();
			break;
		default:
			alertErrorInfo(error);
			window.location.href = Paths.login;
	}
};

const alertErrorInfo = (error: ExtendedError) => {
	const code = error.response.data.code;
	const message = error.response.data.message;
	alert(`[${code}] ${message}`);
};

export default request;
