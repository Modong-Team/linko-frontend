import { ReplyPage } from '../../components/pages/reply';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.reply} />
			<ReplyPage />
		</>
	);
}
