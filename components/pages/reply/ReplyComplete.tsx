import { SC } from '../../../styles/styled';
import { Icons } from '../../../styles/icons';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getApplicant } from '../../../api/applicant';
import useLoadingStatus from '../../../hooks/useLoadingStatus';

export default function ReplyComplete({ applicantId }: ReplyCompletePageProps) {
	const [applicant, setApplicant] = useState<ResponseApplicant.Get>();
	const { onStartGlobalLoading, onFinishGlobalLoading } = useLoadingStatus();

	useEffect(() => {
		if (!isNaN(applicantId))
			useGet(
				() => getApplicant(applicantId),
				setApplicant,
				onStartGlobalLoading,
				onFinishGlobalLoading,
			);
	}, [applicantId]);

	return (
		<S.Container>
			<h1>
				{Icons.hands}
				<br />
				{applicant?.data.name}님
				<br />
				제출이 완료되었어요!
			</h1>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		> h1 {
			${Fonts.heading24bold}
			text-align: center;
		}
	`;
}
