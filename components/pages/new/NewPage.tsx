import { ApplicationTitleInput } from '../../inputs';
import styled from 'styled-components';
import NewIndicator from './NewIndicator';
import NewMain from './NewMain';
import NewNavigator from './NewNavigator';
import NewPageButtons from './NewPageButtons';
import { useState } from 'react';

export default function NewPage() {
	const [page, setPage] = useState(-1);

	const onChangePage = (page: number) => setPage(page);
	const onPrevPage = () => setPage(page - 1);
	const onNextPage = () => setPage(page + 1);

	return (
		<S.Container>
			<ApplicationTitleInput isError={false} />
			<NewIndicator page={page} />
			<NewMain page={page} />
			<NewNavigator page={page} onChangePage={onChangePage} />
			<NewPageButtons page={page} onPrevPage={onPrevPage} onNextPage={onNextPage} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: grid;
		grid-template-columns: 19.4rem 71.2rem 19.4rem;
		row-gap: 1.6rem;
		width: fit-content;
		margin: 0 auto;
		justify-content: center;
		padding-top: 4rem;

		> div:first-of-type,
		> div:last-of-type {
			grid-column: 2/3;
		}
	`;
}
