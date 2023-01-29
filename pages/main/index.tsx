import { ReactElement } from 'react';
import { MainLayout } from '../../components/layouts';
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

index.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout applicationId={0}>{page}</MainLayout>;
};
