declare namespace RequestEvaluation {
	type Post = {
		score: number;
		comment: string;
	};

	type Put = {
		newScore: number;
		newComment: string;
	};
}

declare namespace ResponseEvaluation {
	type GetAll = {
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
		};
	};

	type GetExist = {
		status: number;
		message: string;
		code: string;
		data: {
			exists: boolean;
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

	type Delete = {
		status: number;
		message: string;
		code: string;
		data: {};
	};
}
