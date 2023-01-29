declare namespace ResponseApplications {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			title: string;
			urlId: string;
		}[];
	};
}
