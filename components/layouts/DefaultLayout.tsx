import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import LoadingDots from '../shared/LoadingDots';
import { LoadingWidths } from '../../constants/loadingWidths';

export default function DefaultLayout({ children }: ChildrenType) {
	return (
		<S.Layout>
			{children}
			<LoadingDots width={LoadingWidths.fullscreen} isHidden={true} />
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div`
		width: 100vw;
		min-height: 100vh;
		background-color: ${Colors.background};
	`;
}
