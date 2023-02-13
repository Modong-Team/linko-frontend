declare namespace RequestToken {
	type Post = {
		refreshToken: string;
	};
}

declare namespace ResponseToken {
	type Post = {
		status: number;
		message: string;
		code: string;
		data: {
			memberId: number;
			accessToken: string;
			refreshToken: string;
		};
	};
}
