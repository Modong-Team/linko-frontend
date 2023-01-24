import request from './core/index';

const baseUrl = '/applicant';

export const postApplication = (data: RequestApplicant.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseApplicant.Post, RequestApplicant.Post>(url, data);
};
