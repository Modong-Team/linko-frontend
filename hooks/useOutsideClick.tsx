import { MutableRefObject, useEffect } from 'react';

export default function useOutsideClick<T extends HTMLElement>(
	ref: MutableRefObject<T>,
	onOutsideClick: () => void,
) {
	const eventListener = (e: CustomEvent<MouseEvent>) => {
		if (!ref?.current?.contains(e.target as Node)) {
			onOutsideClick();
		}
	};

	const addEventListener = () => window.addEventListener('click', eventListener as EventListener);

	const removeEventListener = () =>
		window.removeEventListener('click', eventListener as EventListener);

	return useEffect(() => {
		addEventListener();
		return () => removeEventListener();
	}, []);
}
