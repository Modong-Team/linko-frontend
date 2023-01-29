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
			width: 69vw;
			min-width: 99.6rem;
			max-width: 131.6rem;
			margin: 0 auto;
		}
	`;
}
