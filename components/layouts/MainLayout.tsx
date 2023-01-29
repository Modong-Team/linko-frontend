import { Header } from '../shared';
import styled from 'styled-components';
import MainSidebar from '../pages/main/MainSidebar';
import { Colors } from '../../styles/colors';
import DefaultLayout from './DefaultLayout';

export default function MainLayout({ children }: ChildrenType) {
	return (
		<DefaultLayout>
			<Header isMain />
			<S.Layout>
				<MainSidebar />
				{children}
			</S.Layout>
		</DefaultLayout>
	);
}

namespace S {
	export const Layout = styled.div``;
}
