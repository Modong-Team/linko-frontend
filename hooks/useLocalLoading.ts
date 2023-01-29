import { useState } from 'react';

export default function useLocalLoading() {
	const [isLocalLoading, setIsLoading] = useState(false);

	const onStartLocalLoading = () => setIsLoading(true);
	const onFinishLocalLoading = () => setIsLoading(false);

	return { isLocalLoading, onStartLocalLoading, onFinishLocalLoading };
}
