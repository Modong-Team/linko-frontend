import request from './core/index';

const baseUrl = '/applicant';

export const postApplicant = (data: RequestApplicant.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseApplicant.Post, RequestApplicant.Post>(url, data);
};
