import request from './core/index';

const baseUrl = '/application';

export const postApplication = (data: RequestApplication.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseApplication.Post, RequestApplication.Post>(url, data);
};

export const putApplication = (applicationId: number, data: RequestApplication.Put) => {
	const url = `${baseUrl}/${applicationId}`;
	return request.put<ResponseApplication.Put, RequestApplication.Put>(url, data);
};
