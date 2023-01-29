import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgDown8 } from '../../styles/svgs';

export default function FilterButton({ label, onClick, onBlur }: FilterButtonProps) {
	return (
		<S.FilterContainer onClick={onClick} onBlur={onBlur}>
			{label}
			{svgDown8}
		</S.FilterContainer>
	);
}

namespace S {
	export const FilterContainer = styled.button`
		${Fonts.button14medium}
		display: flex;
		gap: 0.6rem;
		width: fit-content;
		padding: 0.6rem 1.4rem;
		align-items: center;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 1.6rem;
		position: relative;
		transition: 0.3s ease;
		cursor: pointer;
	`;
}
