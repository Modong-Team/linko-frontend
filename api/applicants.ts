import request from './core/index';

const baseUrl = '/applicants';

export const getApplicants = (
	applicationId: number,
	applicantStatusCode: 1 | 2 | 3 | 4 | 5,
	page: number,
	filter: 'all' | 'evaluating' | 'fail',
	sort: 'name,asc' | 'rate,asc' | 'rate,desc',
) => {
	const size = '6';
	const queries = [
		'applicantStatusCode=' + applicantStatusCode,
		'filter=' + filter,
		'page=' + page,
		'size=' + size,
		'sort=' + sort,
	];
	const url = `${baseUrl}/${applicationId}?${queries.join('&')}`;
	return request.get<ResponseApplicants.Get>(url);
};
