import { Paths } from '../constants/paths';

export default function createReplyUrl(urlId: string) {
	return process.env.NEXT_PUBLIC_FRONT_END_TEST_SERVER_BASE_URL + `${Paths.reply}/${urlId}`;
}
