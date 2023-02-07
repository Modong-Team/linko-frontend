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

export const patchApplicantStatus = (applicantId: number, data: RequestApplicant.Patch) => {
	const url = `${baseUrl}/status/${applicantId}`;
	return request.patch<ResponseApplicant.PatchStatus, RequestApplicant.Patch>(url, data);
};

export const patchApplicantCancelFail = (applicantId: number) => {
	const url = `${baseUrl}/fail/cancel/${applicantId}`;
	return request.patch<ResponseApplicant.PatchCancelFail, RequestApplicant.PatchCancelFail>(
		url,
		{},
	);
};
