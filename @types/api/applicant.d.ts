declare namespace RequestApplicant {
	type Post = {
		applicationId: number;
		name: string;
		essentialAnswers: {
			answer: string;
			essentialQuestionId: number;
		}[];
		questionAnswers: {
			answer: string;
			questionId: number;
		}[];
	};
}
