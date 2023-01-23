import { Colors } from './colors';
import { Fonts } from './fonts';

const CommonStyles = {
	border: 'border:0.1rem solid transparent;',
};

export const ButtonStyles = {
	large: `${Fonts.button14bold} ${CommonStyles.border} padding:1.4rem 2rem; border-radius:0.8rem;`,
	medium: `${Fonts.button14bold} ${CommonStyles.border} padding:1rem 1.6rem; border-radius:0.8rem;`,
	small: `${Fonts.button12bold} ${CommonStyles.border} padding:0.8rem 1.6rem; border-radius:0.8rem;`,
	xsmall: `${Fonts.button12bold} ${CommonStyles.border} padding:0.4rem 0.8rem; border-radius:0.6rem;`,
} as const;

export const PrimaryButtonColors = {
	active: `background-color:${Colors.blue500}; color:${Colors.white};`,
	hover: `background-color:${Colors.blue700}; color:${Colors.white};`,
	pressed: `background-color:${Colors.blue900}; color:${Colors.white};`,
	disabled: `background-color:${Colors.gray300}; color:${Colors.white};`,
} as const;

export const SecondaryButtonColors = {
	active: `background-color:${Colors.gray200}; color:${Colors.gray900};`,
	hover: `background-color:${Colors.gray300}; color:${Colors.gray900};`,
	pressed: `background-color:${Colors.gray400}; color:${Colors.white};`,
	disabled: `background-color:${Colors.gray300}; color:${Colors.white};`,
} as const;

export const RedButtonColors = {
	active: `background-color:${Colors.red500}; color:${Colors.white};`,
	hover: `background-color:${Colors.red700}; color:${Colors.white};`,
	pressed: `background-color:${Colors.red900}; color:${Colors.white};`,
	disabled: `background-color:${Colors.gray300}; color:${Colors.white};`,
} as const;

export const LineButtonColors = {
	active: `background-color:${Colors.white}; color:${Colors.gray950}; border-color:${Colors.gray200};`,
	hover: `background-color:${Colors.gray200}; color:${Colors.gray950}; border-color:${Colors.gray200};`,
	pressed: `background-color:${Colors.gray300}; color:${Colors.gray950}; border-color:${Colors.gray300};`,
	disabled: `background-color:${Colors.gray400}; color:${Colors.white}; border-color:${Colors.gray400};`,
} as const;
