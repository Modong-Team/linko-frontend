import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { PublicPathsRegex, Paths } from '../../constants/paths';

export default function RouterGuard({ children }: ChildrenType) {
	const router = useRouter();
	const [isPermitted, setIsPermitted] = useState(false);

	useEffect(() => {
		const isPublicPath = PublicPathsRegex.test(router.pathname);
		const isAuthTokenExist = sessionStorage.getItem('refreshToken');

		if (isPublicPath || isAuthTokenExist) {
			setIsPermitted(true);
			return;
		}

		setIsPermitted(false);
		router.push(Paths.login);
	}, [router.pathname]);

	return <>{isPermitted && children}</>;
}
