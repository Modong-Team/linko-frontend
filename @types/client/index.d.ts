import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import { LoadingWidths } from '../../constants/loadingWidths';
import { ApplicantStatusCodeKeys } from '../../constants/applicantStatusCode';
import { CardModes } from '../../styles/cardModes';

type CustomButtonProps = CommonButtonProps & {
	buttonType: keyof typeof ButtonTypes;
	buttonSize: keyof typeof ButtonSizes;
	isLoading?: boolean;
	svgIcon?: JSX;
	isSvgIconAtRight?: boolean;
	width?: string;
	justify?: string;
	disabled?: boolean;
};

type CustomButtonType = Omit<CustomButtonProps, 'label'>;

type LoadingDotsProps = {
	width: ValueOf<typeof LoadingWidths>;
	isWhite?: boolean;
	isHidden: boolean;
};

type MainBoardColumnProps = {
	applicantStatusCode: ValueOf<typeof ApplicantStatusCodeKeys>;
};

type MainBoardCardContainerProps = {
	cardMode: ValueOf<typeof CardModes>;
};

type StatusElementProps = MainBoardCardContainerProps & {
	label: string;
	isGray: boolean;
};
