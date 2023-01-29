import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { Styles } from '../../styles/styles';

export default function SnackBar({ label }: SnackBarProps) {
	return <S.Container>{label}</S.Container>;
}

namespace S {
	export const Container = styled.div`
		${Fonts.heading18bold}
		width:80rem;
		padding: 1.8rem 2.4rem;
		border-radius: 0.8rem;
		background-color: ${Colors.gray900};
		color: ${Colors.white};
		position: fixed;
		bottom: 4rem;
		left: 50%;
		transform: translate(-50%, 200%);
		animation: snackBarAnimation ${Styles.snackBarAnimationDuration} ease;
		z-index: 100;

		@keyframes snackBarAnimation {
			0% {
				transform: translate(-50%, 200%);
				opacity: 0;
			}
			25% {
				transform: translate(-50%, 0%);
				opacity: 1;
			}
			55% {
				transform: translate(-50%, 0%);
				opacity: 1;
			}
			100% {
				transform: translate(-50%, 200%);
				opacity: 0;
			}
		}
	`;
}
