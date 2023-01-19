import React, { useState, useEffect } from 'react';

export default function useFreshMiddleState(
	freshValue: string,
	onDidChange: (value: string) => void,
) {
	const [value, setValue] = useState(freshValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (freshValue !== value) onDidChange(value);
	}, [value]);

	useEffect(() => {
		setValue(freshValue);
	});

	return { value, onChange };
}
