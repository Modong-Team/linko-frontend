declare namespace RequestEvaluation {
	type Post = {
		applicantId: number;
		score: number;
		comment: string;
	};

	type Put = {
		evaluationId: number;
		applicantId: number;
		newScore: number;
		newComment: string;
	};
}

declare namespace ResponseEvaluation {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			applicationId: number;
			applicantId: number;
			writerId: number;
			writerMemberId: string;
			writerName: string;
			comment: string;
			score: number;
		}[];
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

	type Delete = {
		status: number;
		message: string;
		code: string;
		data: {};
	};
}
