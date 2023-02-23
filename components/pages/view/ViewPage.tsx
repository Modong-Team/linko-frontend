import styled from 'styled-components';
import ViewHeader from './ViewHeader';
import ViewMain from './ViewMain';
import ViewSidebar from './ViewSidebar';
import { Styles } from '../../../styles/styles';
import useApplicantId from '../../../hooks/useApplicantId';
import { useEffect, useState } from 'react';
import useTriggers from '../../../hooks/useTriggers';

export default function ViewPage({ applicantId }: ViewPageProps) {
	const [page, setPage] = useState(1);
	const { onSetApplicantId } = useApplicantId();
	const { triggers } = useTriggers();

	const onChangePage = (page: number) => setPage(page);
	const onPrevPage = () => setPage(page - 1);
	const onNextPage = () => setPage(page + 1);

	useEffect(() => {
		if (applicantId) onSetApplicantId(applicantId);
	}, [applicantId, triggers.evaluations, triggers.applicant]);

	return (
		<S.Container>
			<ViewHeader />
			<ViewSidebar page={page} onChangePage={onChangePage} />
			<ViewMain page={page} onPrevPage={onPrevPage} onNextPage={onNextPage} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		width: 100%;
		overflow-x: hidden;
		display: grid;
		grid-template-columns: 28rem 1fr;
		position: relative;

		> header {
			grid-column: 2/4;
		}

		> aside {
			grid-row: 1/3;
		}

		> div {
			height: calc(100vh - ${Styles.headerHeight});
		}
	`;
}
