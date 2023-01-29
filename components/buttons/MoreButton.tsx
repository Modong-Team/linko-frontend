import styled from 'styled-components';
import { useState } from 'react';
import { svgMore24 } from '../../styles/svgs';
import { Colors } from '../../styles/colors';
import DropDown from '../dropdowns/DropDown';
import { DynamicStyles } from '../../styles/styles';

export default function MoreButton({ label1, label2, onClick1, onClick2 }: MoreButtonProps) {
	const [isFocus, setIsFocus] = useState(false);

	const onFocus = () => setIsFocus(true);
	const onBlur = () => setIsFocus(false);

	return (
		<S.Button isFocus={isFocus} onClick={onFocus} onBlur={onBlur}>
			{svgMore24}
			<DropDown
				option1={label1}
				option2={label2}
				onClick1={onClick1}
				onClick2={onClick2}
				customCSS={DynamicStyles.dropDownNthOptionRed(2) + DynamicStyles.dropDownTranslate(70, 110)}
				isHidden={!isFocus}
			/>
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button<IsFocusType>`
		border-radius: 0.6rem;
		background-color: ${(props) => props.isFocus && Colors.gray200};
		transition: 0.3s ease;
		display: flex;
		position: relative;
	`;
}
