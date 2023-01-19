import styled from 'styled-components';
import { SC } from '../../styles/styled';
import { svgModong } from '../../styles/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { requestSave } from '../../modules/api/new';
import { RootState } from '../../modules/index';
import { useEffect, useState } from 'react';
import useRouteToPath from '../../hooks/useRouteToPath';
import { Paths } from '../../constants/paths';

export default function Header({ isNew, isMain }: HeaderProps) {
	const dispatch = useDispatch();
	const onRouteToComplete = useRouteToPath(Paths.newComplete);
	const { isLoading } = useSelector(({ newApi }: RootState) => newApi);
	const [isWaitingForComplete, setIsWaitingForComplete] = useState(false);

	const onSave = () => {
		setIsWaitingForComplete(false);
		dispatch(requestSave());
	};

	const onComplete = () => {
		setIsWaitingForComplete(true);
		dispatch(requestSave());
	};

	useEffect(() => {
		if (!isLoading && isWaitingForComplete) onRouteToComplete();
	}, [isLoading]);

	return (
		<S.Container>
			<SC.HeaderLogo>{svgModong}</SC.HeaderLogo>
			{isNew && (
				<div>
					<button onClick={onSave}>저장하기</button>
					<button onClick={onComplete}>작성완료</button>
				</div>
			)}
			{isMain && <div>프로필</div>}
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)`
		width: 100%;
		z-index: 10;

		> div {
			display: flex;
			gap: 1.2rem;
		}
	`;
}
