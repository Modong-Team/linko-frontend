type QuestionType = {
	content: string;
	questionOptionRequest: string[];
	questionType: number;
};

type FormType = {
	applicationId: number;
	questionRequests: QuestionType[];
	title: string;
};
