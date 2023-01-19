import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgPrev, svgNext } from '../../styles/svgs';

export default function NewPageButton({
	label,
	onClick,
	isLeft,
	isRight,
	isHidden,
}: NewPageButtonProps) {
	return (
		<S.Button onClick={onClick} isHidden={isHidden}>
			{isLeft && svgPrev}
			{label}
			{isRight && svgNext}
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button<IsHiddenType>`
		${Fonts.button14bold}
		padding: 1.4rem 2rem;
		display: flex;
		gap: 0.48rem;
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		background-color: ${Colors.white};
		visibility: ${(props) => (props.isHidden ? 'hidden' : '')};

		& {
			svg {
				position: relative;
				top: 0.18rem;
				width: 0.7rem;
			}
		}
	`;
}
