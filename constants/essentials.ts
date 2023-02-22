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
	email: [2],
	phone: [3],
	gender: [4],
	birth: [5],
	academic: [6, 7, 8],
};

export const EssentialIds = {
	이름: 1,
	이메일: 2,
	전화번호: 3,
	성별: 4,
	생년월일: 5,
	소속학교: 6,
	소속과: 7,
	학번: 8,
};
