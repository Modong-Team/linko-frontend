import { Colors } from './colors';

export const Styles = {
	stickyIndicatorAndNavigator: 'position:sticky; top:10rem; height:fit-content;',
	headerHeight: '8rem',
	sidebarWidth: '22rem',
	dropDownAlignLeft: '>div{width:9.2rem;}',
	dropDownOptionRed: `color:${Colors.red500}; &:hover{background-color:${Colors.red100};}`,
	dropDownFirstOptionRed: `>div:first-of-type{color:${Colors.red500}; &:hover{background-color:${Colors.red100};}}`,
	dropDownLastOptionRed: `>div:last-of-type{color:${Colors.red500}; &:hover{background-color:${Colors.red100};}}`,
	dropDownAlignRightBottom: 'left:unset; transform:unset; right:0; bottom:0;',
	dropDownTransformY110: 'transform:translateY(110%)',
	snackBarAnimationDuration: '2000ms',
	resetToBottomRight: 'left:unset; top:unset; right:0; bottom:0;',
} as const;

export const DynamicStyles = {
	dropDownTranslate: (X: number, Y: number) => {
		return Styles.resetToBottomRight + `transform:translate(${X}%,${Y}%)`;
	},
	dropDownNthOptionRed: (N: number) => {
		return `>div:nth-of-type(${N}){color:${Colors.red500}; &:hover{background-color:${Colors.red100};}}`;
	},
} as const;
