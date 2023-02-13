import { useRef, useEffect } from 'react';

export default function useDidMountEffect(func: () => void, deps: any[]) {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, [...deps]);
}
