import { ReplyCompletePage } from '../../components/pages/reply';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function complete() {
	return (
		<>
			<CustomHead title={Seo.Title.replyComplete} />
			<ReplyCompletePage />
		</>
	);
}
