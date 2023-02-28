import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NewLayout } from '../../components/layouts';
import EditPage from '../../components/pages/edit/EditPage';

import CustomHead from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function edit() {
	const router = useRouter();
	const applicationId = router.query.applicationId;
	return (
		<>
			<CustomHead title={Seo.Title.edit} />
			<EditPage applicationId={+(applicationId || 0)} />
		</>
	);
}

edit.getLayout = function getLayout(page: ReactElement) {
	return <NewLayout isNew={true}>{page}</NewLayout>;
};
