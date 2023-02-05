import { Colors } from './colors';

export const Styles = {
	stickyIndicatorAndNavigator: 'position:sticky; top:10rem; height:fit-content;',
	headerHeight: '8rem',
	sidebarWidth: '22rem',
	snackBarAnimationDuration: '2500ms',
	dropDownTextAlignLeft: '>div{width:9.2rem;}',
} as const;

export const DynamicStyles = {
	dropDownTranslate: (X: number, Y: number) => {
		return `right:0; bottom:0; transform:translate(${X}%,${Y}%)`;
	},
	dropDownTranslateToCenter: (Y: number) => {
		return `left:50%; bottom:0; transform:translate(-50%,${Y}%)`;
	},
	dropDownNthOptionRed: (N: number) => {
		return `>div:nth-of-type(${N}){color:${Colors.red500}; &:hover{background-color:${Colors.red100};}}`;
	},
} as const;
