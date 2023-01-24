import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { ReplyLayout } from '../../components/layouts';
import { ReplyPage } from '../../components/pages/reply';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	const router = useRouter();
	const urlId = router.query.urlId;
	return (
		<>
			<CustomHead title={Seo.Title.reply} />
			<ReplyPage urlId={urlId ? urlId + '' : ''} />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <ReplyLayout>{page}</ReplyLayout>;
};
