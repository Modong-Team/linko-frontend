export const QuestionTypes = {
	question: 1,
	singleSelectQuestion: 2,
	multiSelectQuestion: 3,
} as const;

export const QuestionLabels = {
	1: '주관식',
	2: '단일 선택',
	3: '복수 선택',
} as const;
