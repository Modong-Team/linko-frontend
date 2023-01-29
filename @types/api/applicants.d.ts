declare namespace ResponseApplicants {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			name: string;
			rate: number;
			status: string;
			submitDate: string;
			fail: boolean;
		}[];
	};
}
