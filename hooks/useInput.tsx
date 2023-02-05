import { useState } from 'react';

export default function useInput(
	initialValue = '',
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
	const [value, setValue] = useState(initialValue);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
	return [value, onChange];
}
