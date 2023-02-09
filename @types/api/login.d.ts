declare namespace RequestLogin {
	type Post = {
		memberId: string;
		password: string;
	};
}

declare namespace ResponseLogin {
	type Post = {
		status: number;
		message: string;
		code: string;
		data: Data;
	};

	type Data = {
		memberId: number;
		accessToken: string;
		refreshToken: string;
	};
}
