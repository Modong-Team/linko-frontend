type ReplyPageProps = {
	urlId: string;
};

type ReplyCompletePageProps = {
	applicantId: number;
};

type ReplyErrorProps = {
	onAddError: (id: number) => void;
	onRemoveError: (id: number) => void;
	onSetErrors: (errors: number[]) => void;
};
