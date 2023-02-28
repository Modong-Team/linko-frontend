declare namespace ResponseApplicants {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			result: {
				content: Data[];
				totalPages: number;
				totalElements: number;
			};
		};
	};

	type Data = {
		id: number;
		name: string;
		rate: number;
		status: string;
		submitDate: string;
		numOfEvaluator: number;
		applicationId: number;
		fail: boolean;
	};
}
