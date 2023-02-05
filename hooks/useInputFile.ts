import { useState } from 'react';

export default function useInputFile() {
	const [file, setFile] = useState<File>();

	const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = Array.from(e.target.files)[0];
			setFile(file);
		}
	};

	return { file, onChangeFile };
}
