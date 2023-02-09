export const Paths = {
	new: '/new',
	newComplete: '/new/complete',
	main: '/main',
	reply: '/reply',
	replyComplete: '/reply/complete',
	view: '/view',
	register: '/register',
	registerClub: '/register/club',
	registerClubComplete: '/register/club/complete',
	registerMember: '/register/member',
	login: '/login',
} as const;

export const PublicPathsRegex = /register|login|reply/;
