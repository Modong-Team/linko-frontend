type CommonInputProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ApplicationTitleInputProps = {
	isError: boolean;
};

type EssentialCheckInputProps = {
	label: string;
	isFixed: boolean;
	essentialIdx: number;
};

type OptionTitleInputProps = {
	formIdx: number;
	questionIdx: number;
	optionIdx: number;
	questionType: 2 | 3;
};

type QuestionTitleInputProps = CommonInputProps & {
	onClickRemove: () => void;
	placeHolder: string;
};

type ReplyCheckInputProps = Omit<CommonButtonProps, 'onClick'> & {
	questionIdx: number;
	optionIdx: number;
};

type ReplyRadioInputProps = CheckButtonProps & {
	name: string;
};
