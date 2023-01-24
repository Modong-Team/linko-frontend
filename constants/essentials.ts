export const Essentials = {
	name: 1,
	email: 2,
	phoneNumber: 3,
	gender: 4,
	birth: 5,
	school: 6,
	major: 7,
	studentId: 8,
} as const;

export const EssentialCategories = {
	default: [1, 2, 3],
	gender: [4],
	birth: [5],
	academic: [6, 7, 8],
};
