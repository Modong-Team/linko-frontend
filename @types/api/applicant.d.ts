declare namespace RequestApplicant {
	type Post = {
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

	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			name: string;
			rate: number;
			status: string;
			submitDate: string;
			essentialAnswers: {
				essentialQuestion: string;
				essentialAnswer: string;
			}[];
			questionAnswers: {
				essentialQuestion: string;
				essentialAnswer: string;
			}[];
			fail: boolean;
		};
	};
}
