import { useState } from 'react';

export default function useActive() {
	const [isActive, setIsActive] = useState(false);

	const onActivate = () => setIsActive(true);
	const onDeactivate = () => setIsActive(false);

	return { isActive, onActivate, onDeactivate };
}
