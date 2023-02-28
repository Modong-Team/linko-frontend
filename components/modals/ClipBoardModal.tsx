import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import usePreventScroll from '../../hooks/usePreventScroll';
import { Icons } from '../../styles/icons';
import { SC } from '../../styles/styled';
import CustomButton from '../buttons/CustomButton';
import ClipBoard from '../shared/ClipBoard';
import styled from 'styled-components';

export default function ClipBoardModal({
	urlId,
	onTriggerSnackBar,
	onConfirm,
	isHidden,
}: ClipBoardModalProps) {
	usePreventScroll(!isHidden);
	return (
		<SC.ModalBackground isHidden={isHidden} height={window.innerHeight + 'px'}>
			<S.Container>
				<SC.ModalIcon>{Icons.hands}</SC.ModalIcon>
				<SC.ModalTitle>모집이 시작되었어요!</SC.ModalTitle>
				<ClipBoard onTriggerSnackBar={onTriggerSnackBar} urlId={urlId} width={'34rem'} />
				<SC.ModalButtonWrapper>
					<CustomButton
						label={'확인'}
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.primary}
						onClick={onConfirm}
					/>
				</SC.ModalButtonWrapper>
			</S.Container>
		</SC.ModalBackground>
	);
}

namespace S {
	export const Container = styled(SC.ModalContainer)`
		padding: 2.4rem;

		> div:nth-of-type(3) {
			margin-top: 0.8rem;
			margin-bottom: 2rem;
		}
	`;
}
