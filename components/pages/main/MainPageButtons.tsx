import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgLeft16, svgRight16 } from '../../../styles/svgs';

export default function MainPageButtons() {
	return (
		<S.PageButtonsContainer>
			{svgLeft16}
			<S.PageNumber>1</S.PageNumber>
			<S.PageNumber>2</S.PageNumber>
			<S.PageNumber>3</S.PageNumber>
			<S.PageNumber>4</S.PageNumber>
			<S.PageNumber>5</S.PageNumber>
			{svgRight16}
		</S.PageButtonsContainer>
	);
}

namespace S {
	export const PageButtonsContainer = styled.div`
		padding: 2.6rem 0;
		margin-top: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;
	`;

	export const PageNumber = styled.div`
		${Fonts.button14medium}
		border-radius: 0.4rem;
		width: 2.4rem;
		height: 2.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: normal;

		&:first-of-type {
			color: ${Colors.blue500};
			border: 0.14rem solid ${Colors.blue500};
		}
	`;
}
