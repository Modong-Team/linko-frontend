import request from './core/index';

const baseUrl = '/form';

export const postForm = (data: RequestForm.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseForm.Post, RequestForm.Post>(url, data);
};

export const putForm = (dataId: number, data: RequestForm.Put) => {
	const url = `${baseUrl}/${dataId}`;
	return request.put<ResponseForm.Put, RequestForm.Put>(url, data);
};

export const deleteForm = (dataId: number) => {
	const url = `${baseUrl}/${dataId}`;
	return request.delete<ResponseForm.Delete>(url);
};
