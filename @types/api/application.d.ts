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
