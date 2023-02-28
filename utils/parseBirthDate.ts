export default function parseBirthDate(birthDate: string) {
	return [birthDate.slice(0, 2), birthDate.slice(2, 4), birthDate.slice(4)].join('. ');
}
