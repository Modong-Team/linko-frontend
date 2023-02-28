type CommonModalProps = {
	icon?: string;
	title: string;
	description: string;
	onCancel: () => void;
	onConfirm: () => void;
	onConfirmLabel?: string;
	isHidden: boolean;
};

type AgreementModalProps = {
	onClose: () => void;
	isHidden: boolean;
};

type ClipBoardModalProps = ClipBoardProps & {
	onConfirm: () => void;
	isHidden: boolean;
};
