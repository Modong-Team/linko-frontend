import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import { LoadingWidths } from '../../constants/loadingWidths';
import { ApplicantStatusCodeKeys } from '../../constants/applicantStatusCode';

type CustomButtonProps = CommonButtonProps & {
	buttonType: keyof typeof ButtonTypes;
	buttonSize: keyof typeof ButtonSizes;
	isLoading?: boolean;
	svgIcon?: JSX;
};

type CustomButtonType = Omit<CustomButtonProps, 'label'>;

type LoadingDotsProps = {
	width: typeof LoadingWidths[keyof typeof LoadingWidths];
	isWhite?: boolean;
	isHidden: boolean;
};

type MainBoardColumnProps = {
	applicantStatusCode: typeof ApplicantStatusCodeKeys[keyof typeof ApplicantStatusCodeKeys];
};
