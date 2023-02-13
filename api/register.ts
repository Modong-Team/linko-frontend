import request from './core';

const baseUrl = '/register';

export const postRegister = (data: RequestRegister.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseRegister.Post, RequestRegister.Post>(url, data);
};
