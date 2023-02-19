import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { svgPlus16 } from '../../../styles/svgs';
import { Fonts } from '../../../styles/fonts';
import { Styles } from '../../../styles/styles';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';

export default function MainEmpty() {
	const onRouteToNew = useRouteToPath(Paths.new);
	return (
		<S.Container>
			<S.NewBox>
				<h1>
					지원서를 만들어
					<br />
					동아리 모집을 시작해보세요.
				</h1>
				<CustomButton
					label={'새로운 지원서'}
					onClick={onRouteToNew}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.large}
					svgIcon={svgPlus16}
				/>
			</S.NewBox>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		height: calc(100vh - ${Styles.headerHeight});
		display: flex;
	`;

	export const NewBox = styled.div`
		align-self: center;
		width: 50rem;
		padding: 4rem;
		margin: 0 auto;
		margin-bottom: 16rem;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;

		> h1 {
			${Fonts.heading24bold}
			text-align: center;
			margin-bottom: 2.4rem;
		}

		> button {
			display: block;
			margin: 0 auto;

			svg {
				position: relative;
				top: -0.05rem;
			}

			path {
				stroke: ${Colors.white};
			}
		}
	`;
}
