import { useRef, useEffect, MutableRefObject } from 'react';
import ReactDOM from 'react-dom';

export default function RootPortal({ children }: ChildrenType) {
	const rootRef = useRef() as MutableRefObject<HTMLBodyElement>;

	useEffect(() => {
		if (rootRef.current) ReactDOM.createPortal(children, rootRef.current);
	}, [rootRef.current]);

	useEffect(() => {
		const root = document.getElementsByTagName('body')[0];
		if (root) rootRef.current = root;
	}, []);
}
