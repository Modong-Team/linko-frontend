import { Colors } from './colors';

export const Styles = {
	stickyIndicatorAndNavigator: 'position:sticky; top:10rem; height:fit-content;',
	headerHeight: '8rem',
	sidebarWidth: '22rem',
	dropDownAlignLeft: '>div{width:9.2rem,}',
	dropDownOptionRed: `color:${Colors.red500}, &:hover{background-color:${Colors.red100},}`,
	dropDownAlignRightBottom: 'left:unset, transform:unset, right:0, bottom:0,',
} as const;
