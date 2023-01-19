declare namespace RequestForm {
	type Post = {
		applicationId: number | null;
		questionRequests: {
			content: string;
			questionOptionRequest: string[];
			questionType: number;
		}[];
		title: string;
	};

	type Put = {
		applicationId: number | null;
		questionRequests: {
			content: string;
			questionOptionRequest: string[];
			questionType: number;
		}[];
		title: string;
	};
}

declare namespace ResponseForm {
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
		data: null;
	};
}
