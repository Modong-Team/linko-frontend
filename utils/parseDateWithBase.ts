export const parseDateWithBase = (date: number) => {
	return `2023. ${(date + '')[0]}. ${+(date + '').slice(1)}`;
};
