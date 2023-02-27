import request from './core/index';

const baseUrl = '/club';

export const getClub = (clubId: number) => {
	const url = `${baseUrl}/${clubId}`;
	return request.get<ResponseClub.Get>(url);
};

export const getClubByMember = () => {
	const url = `${baseUrl}/member`;
	return request.get<ResponseClub.Get>(url);
};

export const postClub = (data: RequestClub.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseClub.Post, RequestClub.Post>(url, data);
};
