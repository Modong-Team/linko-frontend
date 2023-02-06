import { ReactElement } from 'react';
import SignLayout from '../../components/layouts/SignLayout';
import RegisterPage from '../../components/pages/register/RegisterPage';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<RegisterPage />
			<CustomHead title={Seo.Title.register} />
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
