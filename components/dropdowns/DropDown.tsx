import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import React from 'react';
import withoutPropagation from '../../utils/withoutPropagation';

export default function DropDown({
	svg1,
	svg2,
	svg3,
	option1,
	option2,
	option3,
	onClick1,
	onClick2,
	onClick3,
	customCSS,
	isHidden,
}: DropDownProps) {
	return (
		<S.DropDownContainer customCSS={customCSS} isHidden={isHidden}>
			<div onClick={(e) => withoutPropagation(e, onClick1)}>
				{svg1}
				{option1}
			</div>
			<div onClick={(e) => withoutPropagation(e, onClick2)}>
				{svg2}
				{option2}
			</div>
			{option3 && onClick3 && (
				<div onClick={(e) => withoutPropagation(e, onClick3)}>
					{svg3}
					{option3}
				</div>
			)}
		</S.DropDownContainer>
	);
}

namespace S {
	export const DropDownContainer = styled.div<Partial<CustomCSSType> & Partial<IsHiddenType>>`
		white-space: nowrap;
		position: absolute;
		bottom: -10.8rem;
		left: 50%;
		transform: translateX(-50%);
		text-align: left;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;
		padding: 0.4rem;
		box-shadow: 6px 7px 16px rgba(106, 106, 106, 0.17);
		cursor: pointer;
		z-index: 5;
		width: fit-content;
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => (props.isHidden ? 0 : 1)};
		transition: 0.3s ease;

		div {
			${Fonts.button13medium}
			padding: 0.75rem 0.9rem;
			transition: 0.3s ease;
			display: flex;
			align-items: center;
			gap: 0.65rem;
			border-radius: 0.4rem;
			line-height: normal;

			&:hover {
				background-color: ${Colors.gray100};
				transition: 0.3s ease;
			}

			svg {
				width: 1.5rem;
				position: relative;
				top: -0.05rem;
			}
		}

		${(props) => props.customCSS && props.customCSS};
	`;
}
