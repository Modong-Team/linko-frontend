import { useState } from 'react';
import { Styles } from '../styles/styles';

export default function useSnackBar() {
	const [isShowSnackBar, setisShowSnackBar] = useState(false);

	const onTriggerSnackBar = () => {
		if (!isShowSnackBar) {
			setisShowSnackBar(true);
			setTimeout(() => {
				setisShowSnackBar(false);
			}, +Styles.snackBarAnimationDuration.replace('ms', '') - 500);
		}
	};

	return { isShowSnackBar, onTriggerSnackBar };
}
