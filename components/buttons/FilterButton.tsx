import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { Styles, DynamicStyles } from '../../styles/styles';
import { svgDown8 } from '../../styles/svgs';
import DropDown from '../dropdowns/DropDown';

export default function FilterButton({
	label1,
	label2,
	label3,
	label4,
	label5,
	onClick1,
	onClick2,
	onClick3,
	onClick4,
	onClick5,
	currentLabel,
}: FilterButtonProps) {
	const [isFocus, setIsFocus] = useState(false);

	const onFocus = () => setIsFocus(true);
	const onBlur = () => setIsFocus(false);

	return (
		<S.FilterContainer onClick={onFocus} onBlur={onBlur} isFocus={isFocus}>
			{currentLabel}
			{svgDown8}
			<DropDown
				option1={label1}
				option2={label2}
				option3={label3}
				option4={label4}
				option5={label5}
				onClick1={onClick1}
				onClick2={onClick2}
				onClick3={onClick3}
				onClick4={onClick4}
				onClick5={onClick5}
				customCSS={
					Styles.dropDownTextAlignLeft +
					DynamicStyles.dropDownNthOptionRed(5) +
					DynamicStyles.dropDownTranslateToCenter(105)
				}
				isHidden={!isFocus}
			/>
		</S.FilterContainer>
	);
}

namespace S {
	export const FilterContainer = styled.button<IsFocusType>`
		${Fonts.button14medium}
		display: flex;
		gap: 0.6rem;
		min-width: 10rem;
		justify-content: space-between;
		padding: 0.6rem 1.4rem;
		align-items: center;
		background-color: ${(props) => (props.isFocus ? Colors.gray200 : Colors.white)};
		border: 0.1rem solid ${(props) => (props.isFocus ? Colors.gray300 : Colors.gray200)};
		border-radius: 1.6rem;
		position: relative;
		transition: 0.3s ease;
		cursor: pointer;
	`;
}
