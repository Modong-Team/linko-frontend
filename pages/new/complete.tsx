import { NewCompletePage } from '../../components/pages/new';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function complete() {
	return (
		<>
			<CustomHead title={Seo.Title.newComplete} />
			<NewCompletePage />
		</>
	);
}
