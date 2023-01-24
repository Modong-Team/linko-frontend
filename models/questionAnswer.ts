import { immerable } from 'immer';

export class QuestionAnswer {
	[immerable] = true;

	answer: string;
	questionId: number;

	constructor(answer: string, questionId: number) {
		this.answer = answer;
		this.questionId = questionId;
	}
}
