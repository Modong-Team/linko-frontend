import { Question } from './question';
import { QuestionTypes } from '../constants/questionTypes';

export class Form implements FormType {
	applicationId: number | null;
	questionRequests: QuestionType[];
	title: string;

	constructor(applicationId: number | null, title: string) {
		this.applicationId = applicationId;
		this.questionRequests = [new Question(QuestionTypes.question)];
		this.title = title;
	}
}
