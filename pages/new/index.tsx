import { NewPage } from '../../components/pages/new';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.new} />
			<NewPage />
		</>
	);
}
