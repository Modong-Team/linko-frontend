import { Question } from './question';
import { QuestionTypes } from '../constants/questionTypes';
import { immerable } from 'immer';

export class Form implements FormType {
	[immerable] = true;

	dataId: number | null;
	applicationId: number | null;
	questionRequests: QuestionType[];
	title: string;

	constructor(applicationId: number | null, title: string) {
		this.applicationId = applicationId;
		this.questionRequests = [new Question(QuestionTypes.question)];
		this.title = title;
		this.dataId = null;
	}
}
