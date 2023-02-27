export default function parseMultiOptionAnswers(answers: string) {
	return answers.replaceAll(/"|\[|\]/g, '').replaceAll(',', ', ');
}
