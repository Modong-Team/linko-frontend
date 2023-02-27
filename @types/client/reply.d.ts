type ReplyPageProps = {
	urlId: string;
};

type ReplyCompletePageProps = {
	urlId: string;
};

type ReplyErrorProps = {
	onAddError: (id: number) => void;
	onRemoveError: (id: number) => void;
	onSetErrors: (errors: number[]) => void;
};
