import Lottie from 'react-lottie';
import LoadingLottieBlue from '../../public/assets/loadingBlue.json';
import LoadingLottieWhite from '../../public/assets/loadingWhite.json';
import styled from 'styled-components';
import { LoadingDotsProps } from '../../@types/client';

export default function LoadingDots({ width, isWhite, isHidden }: LoadingDotsProps) {
	const options = {
		loop: true,
		autoplay: true,
		animationData: isWhite ? LoadingLottieWhite : LoadingLottieBlue,
	};

	return (
		<S.Container isHidden={isHidden}>
			<Lottie options={options} width={width} isClickToPauseDisabled={true} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsHiddenType>`
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => (props.isHidden ? 0 : 1)};
		transition: 1s ease;
	`;
}
