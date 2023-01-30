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

type MoreButtonProps = {
	label1: string;
	label2?: string;
	onClick1: () => void;
	onClick2?: () => void;
};

type FilterButtonProps = MoreButtonProps & {
	label3: string;
	onClick3: () => void;
};
