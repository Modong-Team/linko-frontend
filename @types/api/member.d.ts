declare namespace RequestMember {
	type PostCheck = {
		memberId: string;
	};
}

declare namespace ResponseMember {
	type PostCheck = {
		status: number;
		message: string;
		code: string;
		data: {
			duplicated: boolean;
		};
	};
}
