import { ReactElement } from 'react';
import SignLayout from '../../../components/layouts/SignLayout';
import { CustomHead } from '../../../components/seo';
import { Seo } from '../../../constants/seo';
import RegisterClubPage from '../../../components/pages/register/RegisterClubPage';

export default function index() {
	return (
		<>
			<RegisterClubPage />
			<CustomHead title={Seo.Title.registerClub} />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout title='신규 동아리 등록'>{page}</SignLayout>;
};
