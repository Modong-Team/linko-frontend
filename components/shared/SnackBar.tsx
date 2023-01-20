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
		animation: snackBarAnimation ${Styles.snackBarAnimationDuration} ease;
		transform: translateY(200%);

		@keyframes snackBarAnimation {
			0% {
				transform: translateY(200%);
				opacity: 0;
			}
			25% {
				transform: translateY(0%);
				opacity: 1;
			}
			55% {
				transform: translateY(0%);
				opacity: 1;
			}
			100% {
				transform: translateY(200%);
				opacity: 0;
			}
		}
	`;
}
