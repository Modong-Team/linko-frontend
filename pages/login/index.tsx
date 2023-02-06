import { ReactElement } from 'react';
import { CustomHead } from '../../components/seo';
import { Seo } from '../../constants/seo';
import LoginPage from '../../components/pages/login/LoginPage';
import SignLayout from '../../components/layouts/SignLayout';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.login} />
			<LoginPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout>{page}</SignLayout>;
};
