import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import LoadingDots from '../shared/LoadingDots';
import { LoadingWidths } from '../../constants/loadingWidths';
import useLoadingStatus from '../../hooks/useLoadingStatus';

export default function DefaultLayout({ children }: ChildrenType) {
	const { loadingStatus } = useLoadingStatus();
	return (
		<S.Layout>
			{children}
			<LoadingDots width={LoadingWidths.fullscreen} isHidden={!loadingStatus.isLoading} />
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
