import styled from 'styled-components';
import { SC } from '../../styles/styled';
import { svgDown16, svgModong } from '../../styles/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { requestSave } from '../../modules/new/apiProcedures';
import { RootState } from '../../modules/index';
import { useEffect, useState } from 'react';
import useRouteToPath from '../../hooks/useRouteToPath';
import { Paths } from '../../constants/paths';
import useNewApplicationId from '../../hooks/useNewApplicationId';
import CustomButton from '../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

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
				<S.NewSubmitButtons>
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
						isLoading={isLoading}
					/>
				</S.NewSubmitButtons>
			)}
			{isMain && (
				<S.HeaderProfile>
					<S.ProfileInitial>h</S.ProfileInitial>
					<S.ProfileDropDown>{svgDown16}</S.ProfileDropDown>
				</S.HeaderProfile>
			)}
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)`
		width: 100%;
		z-index: 10;
	`;

	export const NewSubmitButtons = styled.div`
		display: flex;
		gap: 1.2rem;
	`;

	export const HeaderProfile = styled.div`
		display: flex;
		align-items: center;
		gap: 0.8rem;
	`;

	export const ProfileInitial = styled.div`
		${Fonts.heading18bold}
		background-color: ${Colors.blue500};
		color: ${Colors.white};
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	export const ProfileDropDown = styled.div`
		display: flex;
		cursor: pointer;
	`;
}
