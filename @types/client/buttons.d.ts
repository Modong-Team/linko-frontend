type CommonButtonProps = {
	label: string;
	onClick: () => void;
};

type IconButtonProps = {
	svgIcon: JSX;
	onClick: () => void;
};

type NewPageButtonProps = CommonButtonProps & {
	isLeft?: boolean;
	isRight?: boolean;
	isHidden: boolean;
};

type NewQuestionButtonProps = {
	onCreateTextQuestion: () => void;
	onCreateSingleSelectQuestion: () => void;
	onCreateMultiSelectQuestion: () => void;
};
