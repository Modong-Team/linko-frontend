import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useLoadingStatus from '../../../hooks/useLoadingStatus';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { Icons } from '../../../styles/icons';
import { SC } from '../../../styles/styled';
import useGet from '../../../hooks/useGet';
import { getApplicationByUrlId } from '../../../api/application';
import { getClub } from '../../../api/club';

export default function ReplyCompletePage({ urlId }: ReplyCompletePageProps) {
	const [club, setClub] = useState<ResponseClub.Get>();
	const [application, setApplication] = useState<ResponseApplication.Get>();
	const { onStartGlobalLoading, onFinishGlobalLoading } = useLoadingStatus();

	useEffect(() => {
		onStartGlobalLoading();
		if (urlId) useGet(() => getApplicationByUrlId(urlId), setApplication, onFinishGlobalLoading);
	}, [urlId]);

	useEffect(() => {
		onStartGlobalLoading();
		if (application) useGet(() => getClub(application.data.clubId), setClub, onFinishGlobalLoading);
	}, [application]);

	return (
		<S.Container>
			<div>
				<p>{club?.data.name}</p>
				<h2>{application?.data.title}</h2>
			</div>
			<div>
				<h1>
					{Icons.hands}
					<br />
					지원서 제출이 완료되었어요!
				</h1>
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		padding: 0;
		overflow: hidden;

		> div:first-of-type {
			padding: 2.4rem 3.2rem;
			background-color: ${Colors.blue100};

			* {
				color: ${Colors.gray800};
			}

			> p {
				${Fonts.subtitle16medium}
			}

			> h2 {
				${Fonts.heading18bold}
			}
		}

		> div:last-of-type {
			padding: 4rem 0;

			> h1 {
				${Fonts.heading24bold}
				text-align: center;
			}
		}
	`;
}
