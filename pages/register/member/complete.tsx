import { ReactElement } from 'react';
import SignLayout from '../../../components/layouts/SignLayout';
import { CustomHead } from '../../../components/seo';
import RegisterMemberCompletePage from '../../../components/pages/register/RegisterMemberCompletePage';
import { Seo } from '../../../constants/seo';

export default function complete() {
	return (
		<>
			<CustomHead title={Seo.Title.registerMemberComplete} />
			<RegisterMemberCompletePage />
		</>
	);
}

complete.getLayout = function getLayout(page: ReactElement) {
	return (
		<SignLayout title='회원가입이 완료되었어요.3월 1일에 만나요!' isMemberCompletePage>
			{page}
		</SignLayout>
	);
};
