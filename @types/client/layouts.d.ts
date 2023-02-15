type NewLayoutProps = ChildrenType & {
	isNew: boolean;
};

type DefaultLayoutProps = ChildrenType & {
	isWhite?: boolean;
};

type SignLayoutProps = ChildrenType & {
	title?: string;
	isOptionPage?: boolean;
	isMemberCompletePage?: boolean;
};
