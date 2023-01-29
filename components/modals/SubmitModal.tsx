import styled from 'styled-components';
import { ButtonSizes, ButtonTypes } from '../../constants/buttons';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import CustomButton from '../buttons/CustomButton';
import { Icons } from '../../styles/icons';
import usePreventScroll from '../../hooks/usePreventScroll';
import { Devices } from '../../styles/devices';
import useLoadingStatus from '../../hooks/useLoadingStatus';

export default function SubmitModal({
	title,
	description,
	onCancel,
	onConfirm,
	isHidden,
}: CommonModalProps) {
	const { loadingStatus } = useLoadingStatus();
	usePreventScroll(!isHidden);
	return (
		<S.ModalBackground isHidden={isHidden}>
			<S.ModalContainer>
				<S.Icon>{Icons.pencil}</S.Icon>
				<S.Title>{title}</S.Title>
				<S.Subtitle>{description}</S.Subtitle>
				<S.ButtonWrapper>
					<CustomButton
						label='취소'
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.secondary}
						onClick={onCancel}
					/>
					<CustomButton
						label='제출하기'
						buttonSize={ButtonSizes.large}
						buttonType={ButtonTypes.primary}
						onClick={onConfirm}
						isLoading={loadingStatus.isGlobalLoading}
					/>
				</S.ButtonWrapper>
			</S.ModalContainer>
		</S.ModalBackground>
	);
}

namespace S {
	export const ModalBackground = styled.div<IsHiddenType>`
		background-color: ${Colors.shade};
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.3s ease;
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => (props.isHidden ? 0 : 1)};

		@media ${Devices.mobile} {
			padding: 2.4rem;
		}
	`;

	export const ModalContainer = styled.div`
		width: 50rem;
		padding: 2.4rem;
		padding-top: 4rem;
		text-align: center;
		background-color: ${Colors.white};
		box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
		border-radius: 1.2rem;

		@media ${Devices.mobile} {
			padding: 2rem;
			padding-bottom: 2.4rem;
		}
	`;

	export const Icon = styled.div`
		${Fonts.heading24bold}
	`;

	export const Title = styled.div`
		${Fonts.heading24bold}
		margin-bottom: 0.4rem;
	`;

	export const Subtitle = styled.div`
		${Fonts.subtitle16medium}
		color: ${Colors.gray700};
		margin-bottom: 2.4rem;
	`;

	export const ButtonWrapper = styled.div`
		display: flex;
		width: 100%;
		gap: 0.8rem;

		button {
			width: 100%;
		}
	`;
}
