import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import MainBoard from './MainBoard';
import MainMeta from './MainMeta';
import MainEmpty from './MainEmpty';

export default function MainPage() {
	const router = useRouter();
	const applicationId = router.query.applicationId;
	return (
		<S.Container isEmpty={!!applicationId}>
			<section>
				{applicationId ? (
					<>
						<MainMeta />
						<MainBoard />
					</>
				) : (
					<MainEmpty />
				)}
			</section>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsEmptyType>`
		padding: 0 3.2rem;
		min-width: 100%;
		height: 100%;
		overflow: scroll;
		background-color: ${(props) => props.isEmpty && Colors.white};

		> section {
			width: clamp(99.6rem, 69vw, 131.6rem);
			min-height: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
		}
	`;
}
