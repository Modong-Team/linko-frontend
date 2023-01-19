import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import NewEssentials from './NewEssentials';
import NewForms from './NewForms';

export default function NewMain({ page }: NewMainProps) {
	return (
		<S.Container>
			{page === -1 && <NewEssentials />}
			{page !== -1 && <NewForms formIdx={page} />}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		background-color: ${Colors.white};
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		padding: 4rem;
	`;
}
