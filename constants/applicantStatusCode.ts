export const ApplicantStatusCodeKeys = {
	fail: 'FAIL',
	accept: 'ACCEPT',
	application: 'APPLICATION',
	interview: 'INTERVIEW',
	success: 'SUCCESS',
} as const;

export const ApplicantStatusCode = {
	fail: 1,
	accept: 2,
	application: 3,
	interview: 4,
	success: 5,
} as const;

export const ApplicantStatusCodeLabel = {
	FAIL: '탈락',
	ACCEPT: '지원 접수',
	APPLICATION: '서류 전형',
	INTERVIEW: '면접 전형',
	SUCCESS: '최종 합격',
} as const;
