type ViewPageProps = {
	applicantId: number;
};

type ViewMainProps = {
	page: number;
	onPrevPage: () => void;
	onNextPage: () => void;
};

type ViewReplyProps = ViewMainProps & {
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

type ViewRateTabProps = {
	onSelectRateEditTab: () => void;
};

type ViewRateEditTabProps = {
	onSelectRateTab: () => void;
};

type ViewSidebarProps = {
	page: number;
	onChangePage: (page: number) => void;
};

type ViewFormsProps = {
	page: number;
};
