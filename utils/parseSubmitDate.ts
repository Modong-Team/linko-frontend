export default function parseSubmitDate(submitDate: string) {
	return submitDate
		.split('T')[0]
		.split('-')
		.map((i) => +i)
		.join('. ');
}
