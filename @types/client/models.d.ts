type QuestionType = {
	content: string;
	questionOptionRequest: string[];
	questionType: 1 | 2 | 3;
};

type FormType = {
	dataId?: number | null;
	applicationId: number | null;
	questionRequests: QuestionType[];
	title: string;
};
