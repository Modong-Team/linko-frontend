import styled from 'styled-components';
import NewComplete from './NewComplete';
import NewIndicator from './NewIndicator';

export default function NewCompletePage() {
	return (
		<S.Container>
			<NewIndicator isComplete />
			<NewComplete />
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
	`;
}
