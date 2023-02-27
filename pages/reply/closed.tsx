import { ReactElement } from 'react';
import ReplyCompleteLayout from '../../components/layouts/ReplyCompleteLayout';
import ReplyClosedPage from '../../components/pages/reply/ReplyClosedPage';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function closed() {
	return (
		<>
			<CustomHead title={Seo.Title.replyClosed} />
			<ReplyClosedPage />
		</>
	);
}

closed.getLayout = function getLayout(page: ReactElement) {
	return <ReplyCompleteLayout>{page}</ReplyCompleteLayout>;
};
