import ReplyMeta from './ReplyMeta';
import ReplyMain from './ReplyMain';
import NewPageButtons from '../new/NewPageButtons';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getApplicationByUrlId } from '../../../api/application';
import useGet from '../../../hooks/useGet';

export default function ReplyPage({ urlId }: ReplyPageProps) {
	const [application, setApplication] = useState<ResponseApplication.Get>();

	useEffect(() => {
		if (urlId) useGet(() => getApplicationByUrlId(urlId), setApplication);
	}, [urlId]);

	useEffect(() => {
		console.log(application);
	}, [application]);

	return (
		<S.Container>
			<ReplyMeta />
			<ReplyMain />
			<NewPageButtons
				page={0}
				onPrevPage={function (): void {
					throw new Error('Function not implemented.');
				}}
				onNextPage={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
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
	`;
}
