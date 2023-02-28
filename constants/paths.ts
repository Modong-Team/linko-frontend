export const Paths = {
	new: '/new',
	newComplete: '/new/complete',
	edit: '/edit',
	main: '/main',
	reply: '/reply',
	replyComplete: '/reply/complete',
	replyClosed: '/reply/closed',
	view: '/view',
	register: '/register',
	registerClub: '/register/club',
	registerClubComplete: '/register/club/complete',
	registerMember: '/register/member',
	registerMemberComplete: '/register/member/complete',
	login: '/login',
	landing: '/landing',
} as const;

export const PublicPathsRegex = /register|login|reply|landing/;
