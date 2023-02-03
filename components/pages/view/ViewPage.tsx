import styled from 'styled-components';
import ViewDrawer from './ViewDrawer';
import ViewHeader from './ViewHeader';
import ViewMain from './ViewMain';
import ViewSidebar from './ViewSidebar';
import { Styles } from '../../../styles/styles';

export default function ViewPage({ applicantId }: ViewPageProps) {
	return (
		<S.Container>
			<ViewHeader />
			<ViewSidebar />
			<ViewMain />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
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
