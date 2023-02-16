import styled from 'styled-components';
import usePreventScroll from '../../hooks/usePreventScroll';
import { SC } from '../../styles/styled';
import CustomButton from '../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export default function BottomSheet({ onClose, isHidden }: BottomSheetProps) {
	usePreventScroll(!isHidden);
	return (
		<S.Background isHidden={isHidden} height={window.innerHeight + 'px'}>
			<S.SheetContainer isHidden={isHidden}>
				<div>
					링코의 서비스는 2023년 3월 1일부터 2023년 3월 31일까지 베타 서비스 기간 동안 이용할 수
					있어요.
				</div>
				<CustomButton
					label={'확인'}
					onClick={onClose}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.large}
				/>
			</S.SheetContainer>
		</S.Background>
	);
}

namespace S {
	export const Background = styled(SC.ModalBackground)`
		padding: 0;
		display: block;
		transition-duration: 0.5s;
	`;

	export const SheetContainer = styled.div<IsHiddenType>`
		background-color: ${Colors.white};
		padding: 3.2rem 1.6rem;
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
		border-radius: 1.2rem 1.2rem 0 0;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		animation: 0.5s ease;
		animation-fill-mode: forwards;
		animation-name: ${(props) => (props.isHidden ? 'slideDown' : 'slideUp')};

		> div {
			${Fonts.body16regular}
			word-break: keep-all;
			padding: 0 1.6rem;
			line-height: 150%;
		}

		> button {
			width: 100%;
		}

		@keyframes slideUp {
			100% {
				transform: translateY(0%);
			}
		}

		@keyframes slideDown {
			0% {
				transform: translateY(0%);
			}
			100% {
				transform: translateY(100%);
			}
		}
	`;
}
