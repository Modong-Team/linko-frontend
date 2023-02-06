import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import SignLayout from '../../../components/layouts/SignLayout';
import RegisterMemberPage from '../../../components/pages/register/RegisterMemberPage';
import { CustomHead } from '../../../components/seo';
import { Seo } from '../../../constants/seo';

export default function complete() {
	const router = useRouter();
	const clubId = router.query.clubId;
	return (
		<>
			<RegisterMemberPage clubId={clubId + ''} />
			<CustomHead title={Seo.Title.registerMember} />
		</>
	);
}

complete.getLayout = function getLayout(page: ReactElement) {
	return <SignLayout title='회원가입'>{page}</SignLayout>;
};
