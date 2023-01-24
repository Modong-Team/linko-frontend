type CommonInputProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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

type ReplyTextInputProps = CommonInputProps & {
	label: string;
	errorMessage: string;
};

type ReplyCheckInputProps = Omit<ReplyTextInputProps, 'value'> & {
	isChecked: boolean;
};

type ReplyRadioInputProps = ReplyCheckInputProps & {
	name: string;
};
