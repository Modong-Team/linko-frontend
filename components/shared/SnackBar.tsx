import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { useRef, MutableRefObject, useEffect } from 'react';
import useMobile from '../../hooks/useMobile';

export default function SnackBar({ label, isShown, width, bottom }: SnackBarProps) {
	const isMobile = useMobile();
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		if (isShown) ref.current.style.animationName = isMobile ? 'snackBarMobile' : 'snackBarDesktop';
		else ref.current.style.animationName = '';
	}, [isShown]);

	return (
		<S.Container width={width} bottom={bottom} isShown={isShown} ref={ref}>
			{label}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<WidthType & BottomType & IsShownType>`
		${Fonts.heading18bold}
		width:${(props) => props.width ?? '80rem'};
		padding: 1.8rem 2.4rem;
		border-radius: 0.8rem;
		background-color: ${Colors.gray900};
		color: ${Colors.white};
		position: absolute;
		bottom: ${(props) => props.bottom ?? '4rem'};
		left: 50%;
		transform: translate(-50%, 150%);
		z-index: 100;
		animation-duration: 2s;
		animation-timing-function: ease;
		opacity: 0;
		padding: ${(props) => !props.isShown && 0};

		@keyframes snackBarDesktop {
			30% {
				transform: translate(-50%, 0%);
				opacity: 1;
			}
			60% {
				transform: translate(-50%, 0%);
				opacity: 1;
			}
		}

		@keyframes snackBarMobile {
			30% {
				transform: translate(-50%, -40%);
				opacity: 1;
			}
			60% {
				transform: translate(-50%, -40%);
				opacity: 1;
			}
		}
	`;
}
