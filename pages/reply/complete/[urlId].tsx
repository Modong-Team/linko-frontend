import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import ReplyCompleteLayout from '../../../components/layouts/ReplyCompleteLayout';
import { ReplyCompletePage } from '../../../components/pages/reply';
import { CustomHead } from '../../../components/seo';
import { Seo } from '../../../constants/seo';

export default function complete() {
	const router = useRouter();
	const urlId = router.query.urlId;
	return (
		<>
			<CustomHead title={Seo.Title.replyComplete} />
			<ReplyCompletePage urlId={urlId ? urlId + '' : ''} />
		</>
	);
}

complete.getLayout = function getLayout(page: ReactElement) {
	return <ReplyCompleteLayout>{page}</ReplyCompleteLayout>;
};
