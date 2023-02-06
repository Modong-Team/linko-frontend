import { ReactElement } from 'react';
import SignLayout from '../../../components/layouts/SignLayout';
import { CustomHead } from '../../../components/seo';
import { Seo } from '../../../constants/seo';
import RegisterMemberCodePage from '../../../components/pages/register/RegisterMemberCodePage';

export default function index() {
	return (
		<>
			<RegisterMemberCodePage />
			<CustomHead title={Seo.Title.registerMemberCode} />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout title='회원가입'>{page}</SignLayout>;
};
