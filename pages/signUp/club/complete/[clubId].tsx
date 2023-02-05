import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import SignLayout from '../../../../components/layouts/SignLayout';
import SignUpClubCompletePage from '../../../../components/pages/signUp/SignUpClubCompletePage';
import { CustomHead } from '../../../../components/seo';
import { Seo } from '../../../../constants/seo';

export default function complete() {
	const router = useRouter();
	const clubId = router.query.clubId;
	return (
		<>
			<SignUpClubCompletePage clubId={clubId + ''} />
			<CustomHead title={Seo.Title.signUpClub} />
		</>
	);
}

complete.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout>{page}</SignLayout>;
};
