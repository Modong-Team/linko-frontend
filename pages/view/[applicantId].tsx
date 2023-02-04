import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { ViewLayout } from '../../components/layouts';
import { ViewPage } from '../../components/pages/view';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	const router = useRouter();
	const applicantId = router.query.applicantId;
	return (
		<>
			<CustomHead title={Seo.Title.view} />
			<ViewPage applicantId={+(applicantId || 0)} />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <ViewLayout>{page}</ViewLayout>;
};
