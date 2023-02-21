declare namespace RequestMemo {
	type Post = {
		applicantId: number;
		content: string;
	};

	type Delete = {
		memoId: number;
	};
}

declare namespace ResponseMemo {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			applicationId: number;
			applicantId: number;
			creatorId: number;
			writerId: string;
			writerName: string;
			content: string;
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

	type Delete = {
		status: number;
		message: string;
		code: string;
	};
}
