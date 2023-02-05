import { ReactElement } from 'react';
import SignLayout from '../../../components/layouts/SignLayout';
import { CustomHead } from '../../../components/seo';
import { Seo } from '../../../constants/seo';
import SignUpClubPage from '../../../components/pages/signUp/SignUpClubPage';

export default function index() {
	return (
		<>
			<SignUpClubPage />
			<CustomHead title={Seo.Title.signUpClub} />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout title='신규 동아리 등록'>{page}</SignLayout>;
};
