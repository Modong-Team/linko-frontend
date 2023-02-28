import axios from 'axios';
import { GenericInstance } from '../../@types/axios/core';
import { store } from '../../pages/_app';

const request: GenericInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
	timeout: 2500,
	headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use(
	(config) => {
		const authToken = store.getState().authData?.accessToken;
		if (authToken) {
			config.headers = {
				Authorization: `Bearer ${authToken}`,
			};
			config.withCredentials = true;
		}
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
	(error) => {
		const code = error.response.data.code;
		const message = error.response.data.message;
		alert(`[${code}] ${message}`);
		history.go();
		return Promise.reject(error);
	},
);

export default request;
