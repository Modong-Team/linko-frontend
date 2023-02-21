import request from './core/index';
const baseUrl = '/evaluation';

export const getEvaluations = (applicantId: number) => {
	const query = 'applicantId=' + applicantId;
	const url = `${baseUrl}s?${query}`;
	return request.get<ResponseEvaluation.Get>(url);
};

export const postEvaluation = (data: RequestEvaluation.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseEvaluation.Post, RequestEvaluation.Post>(url, data);
};

export const putEvaluation = (data: RequestEvaluation.Put) => {
	const url = `${baseUrl}`;
	return request.post<ResponseEvaluation.Put, RequestEvaluation.Put>(url, data);
};

export const deleteEvaluation = (evaluationId: number) => {
	const url = `${baseUrl}/${evaluationId}`;
	return request.delete<ResponseEvaluation.Delete>(url);
};