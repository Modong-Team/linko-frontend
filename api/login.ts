import request from './core/index';
const baseUrl = '/login';

export const postLogin = (data: RequestLogin.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseLogin.Post, RequestLogin.Post>(url, data);
};
