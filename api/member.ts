import request from './core/index';

const baseUrl = '/member';

export const getMember = () => {
	const url = `${baseUrl}`;
	return request.get<ResponseMember.Get>(url);
};

export const postMemberCheck = (data: RequestMember.PostCheck) => {
	const url = `${baseUrl}/check`;
	return request.post<ResponseMember.PostCheck, RequestMember.PostCheck>(url, data);
};
