import LandingPage from '../../components/pages/landing/LandingPage';
import CustomHead from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.landing} />
			<LandingPage />
		</>
	);
}
