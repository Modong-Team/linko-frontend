import request from './core/index';

const baseUrl = '/applicant';

export const getApplicant = (applicantId: number) => {
	const url = `${baseUrl}/${applicantId}`;
	return request.get<ResponseApplicant.Get>(url);
};

export const postApplicant = (data: RequestApplicant.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseApplicant.Post, RequestApplicant.Post>(url, data);
};

export const patchApplicant = (applicantId: number, data: RequestApplicant.Patch) => {
	const url = `${baseUrl}/${applicantId}`;
	return request.patch<ResponseApplicant.Patch, RequestApplicant.Patch>(url, data);
};
