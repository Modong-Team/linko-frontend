export default function withoutPropagation(e: React.MouseEvent, onClick: (...args: any) => void) {
	e.stopPropagation();
	onClick();
}
