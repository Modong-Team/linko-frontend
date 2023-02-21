import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';

export default function ViewCommentBox({ children }: ChildrenType) {
	return <S.Container>{children}</S.Container>;
}

namespace S {
	export const Container = styled.div`
		background-color: ${Colors.gray100};
		padding: 1.2rem;
		border-radius: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		overflow: scroll;

		> p {
			${Fonts.subtitle14medium}
			color: ${Colors.gray700};
			margin: 4.4rem auto;
		}
	`;
}
