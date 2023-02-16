import CustomButton from '../../buttons/CustomButton';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import styled from 'styled-components';
import { svgComingSoon } from '../../../styles/svgs';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import Lottie from 'react-lottie';
import RegisterCompleteLottie from '../../../public/assets/registerComplete.json';
import useMobile from '../../../hooks/useMobile';

export default function RegisterMemberCompletePage() {
	const isMobile = useMobile();
	const onRouteToLanding = useRouteToPath(Paths.landing);
	const date = new Date().getDate();

	const options = {
		loop: false,
		autoplay: true,
		animationData: RegisterCompleteLottie,
	};

	return (
		<S.Container>
			<div>
				{svgComingSoon}
				<h1>D-{29 - date}</h1>
				<div>
					<Lottie options={options} width={'492px'} isClickToPauseDisabled={true} />
				</div>
			</div>
			<p>서비스 오픈을 놓치지 않도록,{isMobile ? <br /> : ' '}문자와 메일로 알려드릴게요!</p>
			<CustomButton
				label={'링코 홈으로'}
				onClick={onRouteToLanding}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;

		> div {
			display: flex;
			position: relative;

			> h1 {
				font-size: 4.8rem;
				font-weight: 700;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-56%, -25%);
				white-space: nowrap;
			}

			> div {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -65%);
			}
		}

		> p {
			${Fonts.subtitle14medium}
			color: ${Colors.gray800};
		}

		> button {
			width: 100%;
			margin-top: 4rem;
		}
	`;
}
