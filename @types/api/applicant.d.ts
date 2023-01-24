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

declare namespace ResponseApplicant {
	type Post = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
		};
	};
}
