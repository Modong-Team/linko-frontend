import { immerable } from 'immer';

export class EssentialAnswer {
	[immerable] = true;

	answer: string;
	essentialQuestionId: number;

	constructor(answer: string, essentialQuestionId: number) {
		this.answer = answer;
		this.essentialQuestionId = essentialQuestionId;
	}
}
