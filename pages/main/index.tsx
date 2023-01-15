import { MainPage } from '../../components/pages/main';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.main} />
			<MainPage />
		</>
	);
}
