import { QuestionTypes } from '../constants/questionTypes';

export class Question implements QuestionType {
	content = '';
	questionOptionRequest: string[] = [];
	questionType;

	constructor(questionType: number) {
		this.questionType = questionType;
		if (questionType !== QuestionTypes.question) this.questionOptionRequest.push('');
	}
}
