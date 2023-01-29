import { Dispatch, SetStateAction } from 'react';

export default async function useGet<T>(
	api: () => Promise<T>,
	dispatch: Dispatch<SetStateAction<T | undefined>>,
	onFinishLoading: () => void,
	onStartLoading?: () => void,
) {
	if (onStartLoading) onStartLoading();
	const res = await api();
	await dispatch(res);
	setTimeout(() => {
		onFinishLoading();
	}, 500);
}
