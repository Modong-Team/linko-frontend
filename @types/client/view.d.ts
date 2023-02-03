type ViewPageProps = {
	applicantId: number;
};

type ViewReplyProps = {
	isDrawerOpen: boolean;
	onOpenDrawer: () => void;
};

type ViewDrawerProps = {
	isDrawerOpen: boolean;
	onCloseDrawer: () => void;
};

type ViewCommentProps = {
	name: string;
	content: string;
	isMine: boolean;
	isRateComment?: boolean;
	rate?: number;
};

type ViewCommentBoxProps = ChildrenType & {
	maxHeight: string;
};
