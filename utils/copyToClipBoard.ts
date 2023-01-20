export default function copyToClipBoard(text: string | undefined) {
	if (text) navigator.clipboard.writeText(text);
}
