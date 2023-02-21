import { useState } from 'react';

export default function useActive(initialState = false): [boolean, () => void, () => void] {
	const [isActive, setIsActive] = useState(initialState);

	const onActivate = () => setIsActive(true);
	const onDeactivate = () => setIsActive(false);

	return [isActive, onActivate, onDeactivate];
}
