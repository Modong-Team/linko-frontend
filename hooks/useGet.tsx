import { Dispatch, SetStateAction } from 'react';

export default async function useGet<T>(
	api: () => Promise<T>,
	dispatch: Dispatch<SetStateAction<T | undefined>>,
	onStartLoading: () => void,
	onFinishLoading: () => void,
) {
	onStartLoading();
	const res = await api();
	await dispatch(res);
	onFinishLoading();
}
