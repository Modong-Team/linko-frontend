type CommonButtonProps = {
	label: string;
	onClick: () => void;
};

type IconButtonProps = {
	svgIcon: JSX;
	onClick: (e: any) => void;
	type?: 'button';
	disabled?: boolean;
};

type NewPageButtonProps = CommonButtonProps & {
	isLeft?: boolean;
	isRight?: boolean;
	isHidden: boolean;
	disabled?: boolean;
};

type NewQuestionButtonProps = {
	onCreateTextQuestion: () => void;
	onCreateSingleSelectQuestion: () => void;
	onCreateMultiSelectQuestion: () => void;
};

type MoreButtonProps = {
	label1: string;
	label2?: string;
	onClick1: () => void;
	onClick2?: () => void;
	translateX?: number;
	translateY?: number;
	isHidden?: boolean;
};

type FilterButtonProps = MoreButtonProps & {
	label3?: string;
	label4?: string;
	label5?: string;
	onClick3?: () => void;
	onClick4?: () => void;
	onClick5?: () => void;
	currentLabel: string;
};

type CheckIconProps = {
	isHover: boolean;
	isChecked: boolean;
};
