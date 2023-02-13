import request from './core';

const baseUrl = '/token';

export const postToken = (data: RequestToken.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseToken.Post, RequestToken.Post>(url, data);
};
