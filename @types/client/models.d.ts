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

type SavedQuestionType = {
	id: number;
	content: string;
	options: string[];
	questionType: 1 | 2 | 3;
};

type SavedFormType = {
	id?: number | null;
	applicationId: number | null;
	questions: SavedQuestionType[];
	title: string;
};
