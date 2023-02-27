declare namespace RequestApplication {
	type Post = {
		clubId: number | null;
		essentialQuestionIds: number[];
		title: string;
		urlId: string | null;
	};

	type Put = {
		clubId: number | null;
		essentialQuestionIds: number[];
		title: string;
		urlId: string | null;
	};
}

declare namespace ResponseApplication {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			title: string;
			urlId: string;
			clubId: number;
			status: 'BEFORE_OPENING' | 'OPEN' | 'CLOSE';
			essentialQuestions: {
				id: number;
				content: string;
				require: boolean;
			}[];
			forms: {
				id: number;
				title: string;
				questions: {
					id: number;
					content: string;
					questionType: number;
					options: string[];
				}[];
			}[];
		};
	};

	type Post = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
		};
	};

	type Put = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
		};
	};
}
