import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

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
}: DropDownProps) {
	return (
		<S.DropDownContainer customCSS={customCSS}>
			<div onClick={onClick1}>
				{svg1}
				{option1}
			</div>
			<div onClick={onClick2}>
				{svg2}
				{option2}
			</div>
			{option3 && (
				<div onClick={onClick3}>
					{svg3}
					{option3}
				</div>
			)}
		</S.DropDownContainer>
	);
}

namespace S {
	export const DropDownContainer = styled.div<Partial<CustomCSSType>>`
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
