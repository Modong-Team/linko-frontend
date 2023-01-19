import { immerable } from 'immer';
import { QuestionTypes } from '../constants/questionTypes';

export class Question implements QuestionType {
	[immerable] = true;

	content = '';
	questionOptionRequest: string[] = [];
	questionType: 1 | 2 | 3;

	constructor(questionType: 1 | 2 | 3) {
		this.questionType = questionType;
		if (questionType !== QuestionTypes.question) this.questionOptionRequest.push('');
	}
}
