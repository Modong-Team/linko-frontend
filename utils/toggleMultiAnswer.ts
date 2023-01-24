export default function toggleMultiAnswer(
	prev: string,
	target: string,
	isChecked: boolean,
): string {
	if (!prev && !isChecked) return prev;
	if (!prev && isChecked) {
		const parsedNew: string[] = [];
		parsedNew.push(target);
		return JSON.stringify(parsedNew);
	}

	try {
		const parsedPrev: string[] = JSON.parse(prev);
		if (isChecked) {
			if (!parsedPrev.includes(target)) parsedPrev.push(target);
			return JSON.stringify(parsedPrev);
		}
		if (parsedPrev.includes(target))
			return JSON.stringify(parsedPrev.filter((prev) => prev !== target));
	} catch {
		return prev;
	}

	return '';
}
