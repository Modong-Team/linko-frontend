import { ReactElement } from 'react';
import { NewLayout } from '../../components/layouts';
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

index.getLayout = function getLayout(page: ReactElement) {
	return <NewLayout isNew={true}>{page}</NewLayout>;
};
