import styled from 'styled-components';
import { SC } from '../../styles/styled';
import { svgLogo } from '../../styles/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { requestSave } from '../../modules/new/apiProcedures';
import { RootState } from '../../modules/index';
import { useEffect, useState } from 'react';
import useRouteToPath from '../../hooks/useRouteToPath';
import { Paths } from '../../constants/paths';
import useNewApplicationId from '../../hooks/useNewApplicationId';
import CustomButton from '../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import ProfileDropDown from '../dropdowns/ProfileDropDown';
import SubmitModal from '../modals/SubmitModal';
import useActive from '../../hooks/useActive';
import { Icons } from '../../styles/icons';
import { patchApplicationOpen } from '../../api/application';
import useTriggers from '../../hooks/useTriggers';
import { Devices } from '../../styles/devices';

export default function Header({ isNew, isMain }: HeaderProps) {
	const dispatch = useDispatch();
	const { newApplicationId, onResetNewApplicationId } = useNewApplicationId();
	const { isLoading } = useSelector(({ newApi }: RootState) => newApi);
	const [isWaitingForComplete, setIsWaitingForComplete] = useState(false);
	const [isWaitingForSave, setIsWaitingForSave] = useState(false);
	const onRouteToComplete = useRouteToPath(Paths.newComplete + '/' + newApplicationId);
	const onRouteToMain = useRouteToPath(Paths.main);
	const onRouteToMainNewApplication = useRouteToPath(Paths.main + '/' + newApplicationId);
	const onRouteToLanding = useRouteToPath(Paths.landing);
	const [isShowSubmitModal, onOpenSubmitModal, onHideSubmitModal] = useActive();
	const { onTriggerRefreshMain } = useTriggers();

	const onSave = () => {
		setIsWaitingForSave(true);
		dispatch(requestSave());
	};

	const onComplete = () => {
		setIsWaitingForComplete(true);
		dispatch(requestSave());
	};

	const patchOpen = async () => {
		if (!newApplicationId) return;
		await patchApplicationOpen(newApplicationId);
		onResetNewApplicationId();
		onRouteToComplete();
	};

	const cleanUpAfterSave = () => {
		onResetNewApplicationId();
		onRouteToMainNewApplication();
	};

	const onClickLogo = () => {
		if (isNew || isMain) {
			onRouteToMain();
			onTriggerRefreshMain();
		} else onRouteToLanding();
	};

	useEffect(() => {
		if (isLoading) return;
		if (isWaitingForSave) cleanUpAfterSave();
		if (isWaitingForComplete) patchOpen();
		setIsWaitingForSave(false);
		setIsWaitingForComplete(false);
		return () => onHideSubmitModal();
	}, [isLoading]);

	return (
		<S.Container isException={!(isNew || isMain)}>
			<S.Logo onClick={onClickLogo} isException={!(isNew || isMain)}>
				{svgLogo}
			</S.Logo>
			{isNew && (
				<S.NewSubmitButtons>
					<CustomButton
						label={'저장'}
						onClick={onSave}
						buttonType={ButtonTypes.secondary}
						buttonSize={ButtonSizes.large}
					/>
					<CustomButton
						label={'작성완료'}
						onClick={onOpenSubmitModal}
						buttonType={ButtonTypes.primary}
						buttonSize={ButtonSizes.large}
						isLoading={isLoading}
					/>
				</S.NewSubmitButtons>
			)}
			{isMain && <ProfileDropDown />}
			<SubmitModal
				icon={Icons.dart}
				title={'지원서를 작성 완료하고 모집을 시작할까요?'}
				description={'모집이 시작되면 지원서 수정이 불가능해요.'}
				onCancel={onHideSubmitModal}
				onConfirm={onComplete}
				onConfirmLabel={'모집 시작'}
				isHidden={!isShowSubmitModal}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)<IsExceptionType>`
		width: 100%;
		z-index: 10;

		@media ${Devices.mobile} {
			height: ${(props) => props.isException && '6.9rem'};
			justify-content: ${(props) => props.isException && 'center'};
		}
	`;

	export const Logo = styled(SC.HeaderLogo)<IsExceptionType>`
		@media ${Devices.mobile} {
			> svg {
				display: ${(props) => props.isException && 'flex'};
				width: ${(props) => props.isException && '6.8rem'};
			}
		}
	`;

	export const NewSubmitButtons = styled.div`
		display: flex;
		gap: 1.2rem;

		> button {
			width: 8.9rem;
			white-space: nowrap;
		}
	`;
}
