import { MutableRefObject, useEffect, useState } from 'react';

export default function useScrollExist(scrollerRef: MutableRefObject<HTMLElement>, dep?: any) {
	const [isScrollExist, setIsScrollExist] = useState(false);

	useEffect(() => {
		if (scrollerRef.current.scrollHeight > scrollerRef.current.clientHeight) setIsScrollExist(true);
		else setIsScrollExist(false);
	}, [dep]);

	return isScrollExist;
}
