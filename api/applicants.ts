import request from './core/index';

const baseUrl = '/applicants';

export const getApplicants = (applicationId: number) => {
	const url = `${baseUrl}/${applicationId}`;
	return request.get<ResponseApplicants.Get>(url);
};
