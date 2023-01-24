export default function isMultiChecked(checkedOptions: string, option: string): boolean {
	if (!checkedOptions) return false;

	try {
		const parsedCheckedOptions: string[] = JSON.parse(checkedOptions);
		return parsedCheckedOptions.includes(option);
	} catch {
		return false;
	}
}
