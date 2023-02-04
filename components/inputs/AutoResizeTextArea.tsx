import { useRef, MutableRefObject, useEffect } from 'react';

export default function AutoResizeTextArea({
	value,
	onChange,
	placeholder,
	onFocus,
	onBlur,
}: AutoResizeTextAreaProps) {
	const textAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

	const onAutoResize = () => {
		textAreaRef.current.style.height = 'auto';
		const height = textAreaRef.current.scrollHeight;
		textAreaRef.current.style.height = height / 10 + 'rem';
	};

	useEffect(() => {
		onAutoResize();
	}, [value]);

	return (
		<textarea
			value={value}
			onChange={onChange as any}
			placeholder={placeholder}
			onFocus={onFocus}
			onBlur={onBlur}
			ref={textAreaRef}
			rows={1}
		/>
	);
}
