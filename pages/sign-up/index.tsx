import { ReactElement } from 'react';
import SignLayout from '../../components/layouts/SignLayout';
import SignUpPage from '../../components/pages/sign-up/SignUpPage';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<SignUpPage />
			<CustomHead title={Seo.Title.signUp} />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return (
		<SignLayout title='회원가입' isOptionPage>
			{page}
		</SignLayout>
	);
};
