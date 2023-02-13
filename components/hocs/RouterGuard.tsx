import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { PublicPathsRegex, Paths } from '../../constants/paths';
import { StorageKeys } from '../../constants/keys';
import useAuthData from '../../hooks/useAuthData';
import { postToken } from '../../api/token';
import useDidMountEffect from '../../hooks/useDidMountEffect';

export default function RouterGuard({ children }: ChildrenType) {
	const router = useRouter();
	const [isRenderPermitted, setIsRenderPermitted] = useState(false);
	const { authData, onRequestSetAuthData } = useAuthData();

	const onRouteToMain = () => router.push(Paths.main);
	const onRouteToLogin = () => router.push(Paths.login);
	const checkIsPublicPath = () => PublicPathsRegex.test(router.pathname);
	const checkIsAuthed = () => !!authData;

	const onTryRestoreAuthData = async () => {
		const refreshToken = sessionStorage.getItem(StorageKeys.refreshToken);
		if (!refreshToken) return onDecideWhetherToRender();
		try {
			const post = await postToken({ refreshToken });
			onRequestSetAuthData(post.data);
		} catch {
			sessionStorage.removeItem(StorageKeys.refreshToken);
			onDecideWhetherToRender();
		}
	};

	const onDecideWhetherToRender = () => {
		if (checkIsPublicPath() !== checkIsAuthed()) setIsRenderPermitted(true);
		else onRedirectToProperPath();
	};

	const onRedirectToProperPath = () => {
		if (checkIsPublicPath() && checkIsAuthed()) onRouteToMain();
		if (!checkIsPublicPath() && !checkIsAuthed()) onRouteToLogin();
	};

	useEffect(() => {
		onTryRestoreAuthData();
	}, []);

	useDidMountEffect(() => {
		onDecideWhetherToRender();
	}, [router.pathname, authData]);

	return <>{isRenderPermitted && children}</>;
}
