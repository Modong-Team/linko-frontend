declare namespace ResponseApplicants {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: Data[];
	};

	type Data = {
		id: number;
		name: string;
		rate: number;
		status: string;
		submitDate: string;
		fail: boolean;
	};
}
