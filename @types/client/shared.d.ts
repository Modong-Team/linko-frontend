type HeaderProps = {
	isNew?: boolean;
	isMain?: boolean;
};

type SnackBarProps = {
	label: string;
	isShown: boolean;
	width?: string;
	bottom?: string;
};

type CalendarProps = {
	startDate: number;
	endDate: number;
	onChangeStartDate: (value: number) => void;
	onChangeEndDate: (value: number) => void;
	onClose: () => void;
	isHidden: boolean;
	isApril: boolean;
	onSelectApril: () => void;
	onSelectMarch: () => void;
};

type ToolTipProps = {
	onClose: (e: any) => void;
	isHidden: boolean;
};

type BottomSheetProps = {
	onClose: () => void;
	isHidden: boolean;
};

type ClipBoardProps = {
	onTriggerSnackBar: () => void;
	urlId: string;
	width?: string;
};
