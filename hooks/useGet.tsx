import { Dispatch, SetStateAction } from 'react';

export default async function useGet<T>(
	api: () => Promise<T>,
	dispatch: Dispatch<SetStateAction<T | undefined>>,
	postProcess?: () => any,
) {
	const res = await api();
	await dispatch(res);
	if (postProcess) postProcess();
}
