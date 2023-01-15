import { ReactElement } from 'react';
import { ViewLayout } from '../../components/layouts';
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

index.getLayout = function getLayout(page: ReactElement) {
	return <ViewLayout>{page}</ViewLayout>;
};
