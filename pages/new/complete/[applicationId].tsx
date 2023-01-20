import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NewLayout } from '../../../components/layouts';
import { NewCompletePage } from '../../../components/pages/new';
import { CustomHead } from '../../../components/seo';
import { Seo } from '../../../constants/seo';

export default function complete() {
	const router = useRouter();
	const applicationId = router.query.applicationId;
	return (
		<>
			<CustomHead title={Seo.Title.newComplete} />
			<NewCompletePage applicationId={Number(applicationId)} />
		</>
	);
}

complete.getLayout = function getLayout(page: ReactElement) {
	return <NewLayout isNew={false}>{page}</NewLayout>;
};
