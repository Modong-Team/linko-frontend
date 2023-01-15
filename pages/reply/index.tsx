import { ReactElement } from 'react';
import { ReplyLayout } from '../../components/layouts';
import { ReplyPage } from '../../components/pages/reply';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.reply} />
			<ReplyPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <ReplyLayout>{page}</ReplyLayout>;
};
