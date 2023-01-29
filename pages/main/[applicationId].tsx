import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { MainLayout } from '../../components/layouts';
import { MainPage } from '../../components/pages/main';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function main() {
	return (
		<>
			<CustomHead title={Seo.Title.main} />
			<MainPage />
		</>
	);
}

main.getLayout = function getLayout(page: ReactElement) {
	const router = useRouter();
	const applicationId = router.query.applicationId;
	return <MainLayout applicationId={+(applicationId || 0)}>{page}</MainLayout>;
};
