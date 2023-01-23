import styled from 'styled-components';
import { SC } from '../../styles/styled';
import { svgModong } from '../../styles/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { requestSave } from '../../modules/new/apiProcedures';
import { RootState } from '../../modules/index';
import { useEffect, useState } from 'react';
import useRouteToPath from '../../hooks/useRouteToPath';
import { Paths } from '../../constants/paths';
import useNewApplicationId from '../../hooks/useNewApplicationId';
import CustomButton from '../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../constants/buttons';

export default function Header({ isNew, isMain }: HeaderProps) {
	const dispatch = useDispatch();
	const { newApplicationId } = useNewApplicationId();
	const { isLoading } = useSelector(({ newApi }: RootState) => newApi);
	const [isWaitingForComplete, setIsWaitingForComplete] = useState(false);
	const onRouteToComplete = useRouteToPath(Paths.newComplete + '/' + newApplicationId);

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
					<CustomButton
						label={'저장하기'}
						onClick={onSave}
						buttonType={ButtonTypes.secondary}
						buttonSize={ButtonSizes.large}
					/>
					<CustomButton
						label={'작성완료'}
						onClick={onComplete}
						buttonType={ButtonTypes.primary}
						buttonSize={ButtonSizes.large}
					/>
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
