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
};
