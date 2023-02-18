type CommonModalProps = {
	title: string;
	description: string;
	onCancel: () => void;
	onConfirm: () => void;
	isHidden: boolean;
};

type AgreementModalProps = {
	onClose: () => void;
	isHidden: boolean;
};
