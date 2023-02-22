import styled from 'styled-components';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import usePreventScroll from '../../hooks/usePreventScroll';
import { Icons } from '../../styles/icons';
import { SC } from '../../styles/styled';
import CustomButton from '../buttons/CustomButton';

export default function SectionModal({
	title,
	description,
	onCancel,
	onConfirm,
	isHidden,
}: CommonModalProps) {
	usePreventScroll(!isHidden);
	return (
		<>
			<S.ModalContainer isHidden={isHidden}>
				<SC.ModalIcon>{Icons.trash}</SC.ModalIcon>
				<SC.ModalTitle>{title}</SC.ModalTitle>
				<SC.ModalSubtitle>{description}</SC.ModalSubtitle>
				<SC.ModalButtonWrapper>
					<CustomButton
						label='취소'
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.secondary}
						onClick={onCancel}
					/>
					<CustomButton
						label='삭제하기'
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.red}
						onClick={onConfirm}
					/>
				</SC.ModalButtonWrapper>
			</S.ModalContainer>
			<SC.ModalBackground isHidden={isHidden} height={window.innerHeight + 'px'} />
		</>
	);
}

namespace S {
	export const ModalContainer = styled(SC.ModalContainer)<IsHiddenType>`
		width: 31.2rem;
		position: absolute;
		z-index: 500;
		left: 50%;
		top: 0;
		transform: translate(-50%, 29%);
		transition: 0.3s ease;
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => (props.isHidden ? 0 : 1)};
	`;
}
