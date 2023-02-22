import request from './core/index';

const baseUrl = '/applicants';
const resource = 'evaluations';

export const getEvaluations = (applicantId: number) => {
	const url = `${baseUrl}/${applicantId}/${resource}`;
	return request.get<ResponseEvaluation.GetAll>(url);
};

export const getEvaluation = (applicantId: number) => {
	const url = `${baseUrl}/${applicantId}/member/${resource}`;
	return request.get<ResponseEvaluation.Get>(url);
};

export const getEvaluationExist = (applicantId: number) => {
	const url = `${baseUrl}/${applicantId}/exist/${resource}`;
	return request.get<ResponseEvaluation.GetExist>(url);
};

export const postEvaluation = (applicantId: number, data: RequestEvaluation.Post) => {
	const url = `${baseUrl}/${applicantId}/${resource}`;
	return request.post<ResponseEvaluation.Post, RequestEvaluation.Post>(url, data);
};

export const putEvaluation = (
	applicantId: number,
	evaluationId: number,
	data: RequestEvaluation.Put,
) => {
	const url = `${baseUrl}/${applicantId}/${resource}/${evaluationId}`;
	return request.put<ResponseEvaluation.Put, RequestEvaluation.Put>(url, data);
};

export const deleteEvaluation = (applicantId: number, evaluationId: number) => {
	const url = `${baseUrl}/${applicantId}/${resource}/${evaluationId}`;
	return request.delete<ResponseEvaluation.Delete>(url);
};
