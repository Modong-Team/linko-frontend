import { ViewPage } from '../../components/pages/view';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.view} />
			<ViewPage />
		</>
	);
}
