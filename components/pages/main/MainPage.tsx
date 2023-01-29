import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import MainBoard from './MainBoard';
import MainMeta from './MainMeta';

export default function MainPage({ applicationId }: MainPageProps) {
	return (
		<S.Container>
			<section>
				<MainMeta />
				<MainBoard />
			</section>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		padding: 0 3.2rem;
		min-width: 100%;
		height: 100%;
		overflow: scroll;
		background-color: ${Colors.white};

		> section {
			width: clamp(99.6rem, 69vw, 131.6rem);
			min-height: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
		}
	`;
}
