declare namespace RequestRegister {
	type Post = {
		memberId: string;
		password: string;
		name: string;
		email: string;
		phone: string;
		clubCode: string;
	};
}

declare namespace ResponseRegister {
	type Post = {
		id: number;
	};
}
