import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import SignLayout from '../../../../components/layouts/SignLayout';
import RegisterClubCompletePage from '../../../../components/pages/register/RegisterClubCompletePage';
import { CustomHead } from '../../../../components/seo';
import { Seo } from '../../../../constants/seo';

export default function complete() {
	const router = useRouter();
	const clubId = router.query.clubId;
	return (
		<>
			<RegisterClubCompletePage clubId={clubId + ''} />
			<CustomHead title={Seo.Title.registerClub} />
		</>
	);
}

complete.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout>{page}</SignLayout>;
};
