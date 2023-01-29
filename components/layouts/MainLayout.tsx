import { Header } from '../shared';
import styled from 'styled-components';
import MainSidebar from '../pages/main/MainSidebar';
import DefaultLayout from './DefaultLayout';
import { Styles } from '../../styles/styles';

export default function MainLayout({ children, applicationId }: ChildrenType & MainPageProps) {
	return (
		<DefaultLayout>
			<Header isMain />
			<MainSidebar applicationId={applicationId} />
			<S.Layout>{children}</S.Layout>
		</DefaultLayout>
	);
}

namespace S {
	export const Layout = styled.div`
		margin-left: clamp(22rem, 15.28vw, 27.2rem);
		height: calc(100vh - ${Styles.headerHeight});
	`;
}
