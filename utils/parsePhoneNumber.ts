export default function parsePhoneNumber(phoneNumber: string) {
	const cleaned = phoneNumber.replaceAll('-', '');
	const decorated = cleaned.slice(0, 3) + '-' + cleaned.slice(3, 7) + '-' + cleaned.slice(7);
	return decorated;
}
