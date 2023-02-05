declare namespace RequestClub {
	type Post = {
		name: string;
		profileImgUrl: string;
	};
}

declare namespace ResponseClub {
	type Post = {
		status: number;
		message: string;
		code: string;
		data: {
			id: number;
			code: string;
		};
	};
}
