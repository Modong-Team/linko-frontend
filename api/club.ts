import request from './core/index';

const baseUrl = '/club';

export const postClub = (data: RequestClub.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseClub.Post, RequestClub.Post>(url, data);
};
