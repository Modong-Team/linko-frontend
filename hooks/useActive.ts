import { useState } from 'react';

export default function useActive(): [boolean, () => void, () => void] {
	const [isActive, setIsActive] = useState(false);

	const onActivate = () => setIsActive(true);
	const onDeactivate = () => setIsActive(false);

	return [isActive, onActivate, onDeactivate];
}
