import request from './core/index';

const baseUrl = '/applications';

export const getApplications = (clubId: number) => {
	const url = `${baseUrl}/${clubId}`;
	return request.get<ResponseApplications.Get>(url);
};
