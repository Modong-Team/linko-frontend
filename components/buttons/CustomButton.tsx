import styled from 'styled-components';
import { CustomButtonProps, CustomButtonType } from '../../@types/client';
import { ButtonTypes } from '../../constants/buttons';
import {
	ButtonStyles,
	LineButtonColors,
	PrimaryButtonColors,
	RedButtonColors,
	SecondaryButtonColors,
} from '../../styles/buttons';
import LoadingDots from '../shared/LoadingDots';
import { LoadingWidths } from '../../constants/loadingWidths';

export default function CustomButton({
	label = '버튼',
	onClick,
	buttonSize,
	buttonType,
	svgIcon,
	isLoading = false,
	isSvgIconAtRight,
	width,
	justify,
	children,
	disabled,
}: CustomButtonProps & Partial<ChildrenType>) {
	return (
		<S.Button
			buttonSize={buttonSize}
			buttonType={buttonType}
			onClick={onClick}
			isLoading={isLoading}
			width={width}
			justify={justify}
			disabled={disabled}>
			<span>
				{!isSvgIconAtRight && svgIcon}
				{label}
				{isSvgIconAtRight && svgIcon}
			</span>
			{children}
			<LoadingDots width={LoadingWidths.button} isWhite isHidden={!isLoading} />
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button<CustomButtonType>`
		width: ${(props) => props.width};
		position: relative;
		transition: 0.3s ease;
		${(props) => ButtonStyles[props.buttonSize]}

		${(props) => props.buttonType === ButtonTypes.primary && PrimaryButtonColors.active}
		${(props) => props.buttonType === ButtonTypes.secondary && SecondaryButtonColors.active}
		${(props) => props.buttonType === ButtonTypes.red && RedButtonColors.active}
		${(props) => props.buttonType === ButtonTypes.line && LineButtonColors.active}

    &:hover {
			${(props) => props.buttonType === ButtonTypes.primary && PrimaryButtonColors.hover}
			${(props) => props.buttonType === ButtonTypes.secondary && SecondaryButtonColors.hover}
      ${(props) => props.buttonType === ButtonTypes.red && RedButtonColors.hover}
      ${(props) => props.buttonType === ButtonTypes.line && LineButtonColors.hover}
		}

		&:active {
			${(props) => props.buttonType === ButtonTypes.primary && PrimaryButtonColors.pressed}
			${(props) => props.buttonType === ButtonTypes.secondary && SecondaryButtonColors.pressed}
      ${(props) => props.buttonType === ButtonTypes.red && RedButtonColors.pressed}
      ${(props) => props.buttonType === ButtonTypes.line && LineButtonColors.pressed}
		}

		&:disabled {
			${(props) => props.buttonType === ButtonTypes.primary && PrimaryButtonColors.disabled}
			${(props) => props.buttonType === ButtonTypes.secondary && SecondaryButtonColors.disabled}
      ${(props) => props.buttonType === ButtonTypes.red && RedButtonColors.disabled}
      ${(props) => props.buttonType === ButtonTypes.line && LineButtonColors.disabled}
		}

		> span {
			display: flex;
			align-items: center;
			justify-content: ${(props) => (props.justify ? props.justify : 'center')};
			gap: 0.4rem;
			visibility: ${(props) => props.isLoading && 'hidden'};
		}
	`;
}
