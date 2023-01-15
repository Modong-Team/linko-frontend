import styled from 'styled-components';
import { DefaultLayout } from '.';
import { Styles } from '../../styles/styles';

export default function WithHeaderLayout({ children }: ChildrenType) {
	return (
		<DefaultLayout>
			<S.Layout>{children}</S.Layout>
		</DefaultLayout>
	);
}

namespace S {
	export const Layout = styled.div`
		padding-top: ${Styles.headerHeight};
	`;
}
