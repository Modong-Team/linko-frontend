import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export default function NewMain() {
	return <S.Container>NewMain</S.Container>;
}

namespace S {
	export const Container = styled.div`
		background-color: ${Colors.white};
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		padding: 4rem;
	`;
}
