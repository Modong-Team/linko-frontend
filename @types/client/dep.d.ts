import { ButtonTypes, ButtonSizes } from '../../constants/buttons';

type CustomButtonProps = CommonButtonProps & {
	buttonType: keyof typeof ButtonTypes;
	buttonSize: keyof typeof ButtonSizes;
};

type CustomButtonType = {
	buttonType: keyof typeof ButtonTypes;
	buttonSize: keyof typeof ButtonSizes;
};
