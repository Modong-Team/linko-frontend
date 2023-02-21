import { useState } from 'react';

export default function useInput(
	initialValue = '',
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void, (value: string) => void] {
	const [value, setValue] = useState(initialValue);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
	const onResetValue = () => setValue(initialValue);
	const onManuallyChangeValue = (value: string) => setValue(value);
	return [value, onChange, onResetValue, onManuallyChangeValue];
}
