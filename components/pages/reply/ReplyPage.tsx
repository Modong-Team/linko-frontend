import ReplyMeta from './ReplyMeta';
import ReplyMain from './ReplyMain';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getApplicationByUrlId } from '../../../api/application';
import useGet from '../../../hooks/useGet';
import useAnswers from '../../../hooks/useAnswers';
import useApplication from '../../../hooks/useApplication';
import ReplyPageButtons from './ReplyPageButtons';
import { Devices } from '../../../styles/devices';
import useLoadingStatus from '../../../hooks/useLoadingStatus';

export default function ReplyPage({ urlId }: ReplyPageProps) {
	const [application, setApplication] = useState<ResponseApplication.Get>();
	const { onRequestCreateAnswers } = useAnswers();
	const { onSetApplication } = useApplication();
	const [page, setPage] = useState(-1);
	const { onStartGlobalLoading, onFinishGlobalLoading } = useLoadingStatus();

	const onPrevPage = () => setPage(page - 1);
	const onNextPage = () => setPage(page + 1);

	useEffect(() => {
		if (urlId) useGet(() => getApplicationByUrlId(urlId), setApplication, onFinishGlobalLoading);
	}, [urlId]);

	useEffect(() => {
		if (application) {
			onRequestCreateAnswers(application);
			onSetApplication(application);
		}
	}, [application]);

	useEffect(() => {
		onStartGlobalLoading();
	}, []);

	return (
		<S.Container>
			<ReplyMeta />
			<ReplyMain page={page} />
			<ReplyPageButtons page={page} onPrevPage={onPrevPage} onNextPage={onNextPage} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		width: 71.2rem;
		margin: 0 auto;
		padding-top: 6rem;
		padding-bottom: 12rem;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		@media ${Devices.mobile} {
			width: 100%;
			padding: 1.6rem;
			padding-bottom: 6.4rem;
		}
	`;
}
