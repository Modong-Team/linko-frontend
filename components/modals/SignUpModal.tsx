import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import CustomButton from '../buttons/CustomButton';
import usePreventScroll from '../../hooks/usePreventScroll';
import useLoadingStatus from '../../hooks/useLoadingStatus';
import { SC } from '../../styles/styled';
import styled from 'styled-components';
import { Devices } from '../../styles/devices';

export default function SignUpModal({
	title,
	description,
	onCancel,
	onConfirm,
	isHidden,
}: CommonModalProps) {
	usePreventScroll(!isHidden);
	return (
		<SC.ModalBackground isHidden={isHidden}>
			<S.Container>
				<SC.ModalTitle>동아리 이름을 ‘{title}’(으)로 등록할까요?</SC.ModalTitle>
				<SC.ModalSubtitle>{description}</SC.ModalSubtitle>
				<SC.ModalButtonWrapper>
					<CustomButton
						label='취소'
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.secondary}
						onClick={onCancel}
					/>
					<CustomButton
						label='등록하기'
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
		min-height: 24rem;
		display: flex;
		flex-direction: column;

		> div:last-of-type {
			margin-top: auto;
		}

		@media ${Devices.mobile} {
			padding: 2.4rem;
			padding-top: 4rem;
		}
	`;
}
