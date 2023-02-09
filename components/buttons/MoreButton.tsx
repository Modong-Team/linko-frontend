import styled from 'styled-components';
import { useState } from 'react';
import { svgMore24 } from '../../styles/svgs';
import { Colors } from '../../styles/colors';
import DropDown from '../dropdowns/DropDown';
import { DynamicStyles, Styles } from '../../styles/styles';
import withoutPropagation from '../../utils/withoutPropagation';

export default function MoreButton({ label1, label2, onClick1, onClick2 }: MoreButtonProps) {
	const [isFocus, setIsFocus] = useState(false);

	const onFocus = () => setIsFocus(true);
	const onBlur = () => setIsFocus(false);

	const invokeOnBlurAfterOnClick = (onClick: (() => void) | undefined) => {
		if (!onClick) return;
		onClick();
		onBlur();
	};

	return (
		<S.Button isFocus={isFocus} onClick={(e) => withoutPropagation(e, onFocus)} onBlur={onBlur}>
			{svgMore24}
			<DropDown
				option1={label1}
				option2={label2}
				onClick1={() => invokeOnBlurAfterOnClick(onClick1)}
				onClick2={() => invokeOnBlurAfterOnClick(onClick2)}
				customCSS={
					Styles.dropDownTextAlignLeft +
					DynamicStyles.dropDownNthOptionRed(onClick2 ? 2 : 1) +
					DynamicStyles.dropDownTranslate(75, 110)
				}
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
		position: relative;
		display: flex;
		align-items: center;
		height: auto !important;

		&:hover {
			background-color: ${(props) => !props.isFocus && Colors.gray100};
		}
	`;
}
