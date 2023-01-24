import { immerable } from 'immer';

export class Answers implements RequestApplicant.Post {
	[immerable] = true;

	applicationId: number | null;
	name: string;
	essentialAnswers: {
		answer: string;
		essentialQuestionId: number;
	}[];
	questionAnswers: {
		answer: string;
		questionId: number;
	}[];

	constructor() {
		this.applicationId = null;
		this.name = '';
		this.essentialAnswers = [];
		this.questionAnswers = [];
	}
}
