type CommonInputProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ApplicationTitleInputProps = CommonInputProps & {
	isError: boolean;
};

type EssentialCheckInputProps = {
	label: string;
};
