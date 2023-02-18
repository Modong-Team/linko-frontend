declare namespace RequestMember {
	type PostCheck = {
		memberId: string;
	};
}

declare namespace ResponseMember {
	type Get = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			memberId: string;
			name: string;
			email: string;
			phone: string;
		};
	};

	type PostCheck = {
		status: number;
		message: string;
		code: string;
		data: {
			duplicated: boolean;
		};
	};
}
