type QuestionType = {
	content: string;
	questionOptionRequest: string[];
	questionType: number;
};

type FormType = {
	applicationId: number | null;
	questionRequests: QuestionType[];
	title: string;
};
