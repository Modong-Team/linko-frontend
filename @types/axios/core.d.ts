import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export interface GenericInstance extends AxiosInstance {
	get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
	post<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
	put<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
	patch<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T>;
}

export interface ExtendedError extends AxiosError {
	config: AxiosRequestConfig;
	response: {
		status: number;
		data: {
			timestamp: string;
			code: string;
			message: string;
			status: number;
		};
	};
}
