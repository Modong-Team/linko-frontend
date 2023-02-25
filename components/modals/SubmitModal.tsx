import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import CustomButton from '../buttons/CustomButton';
import { Icons } from '../../styles/icons';
import usePreventScroll from '../../hooks/usePreventScroll';
import useLoadingStatus from '../../hooks/useLoadingStatus';
import { SC } from '../../styles/styled';

export default function SubmitModal({
	icon,
	title,
	description,
	onCancel,
	onConfirm,
	onConfirmLabel,
	isHidden,
}: CommonModalProps) {
	const { loadingStatus } = useLoadingStatus();
	usePreventScroll(!isHidden);
	return (
		<SC.ModalBackground isHidden={isHidden} height={window.innerHeight + 'px'}>
			<SC.ModalContainer>
				<SC.ModalIcon>{icon ?? Icons.pencil}</SC.ModalIcon>
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
						label={onConfirmLabel ?? '제출하기'}
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.primary}
						onClick={onConfirm}
						isLoading={loadingStatus.isGlobalLoading}
					/>
				</SC.ModalButtonWrapper>
			</SC.ModalContainer>
		</SC.ModalBackground>
	);
}
