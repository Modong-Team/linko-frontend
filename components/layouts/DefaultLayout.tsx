import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import LoadingDots from '../shared/LoadingDots';
import { LoadingWidths } from '../../constants/loadingWidths';
import useLoadingStatus from '../../hooks/useLoadingStatus';

export default function DefaultLayout({ children, isWhite }: DefaultLayoutProps) {
	const { loadingStatus } = useLoadingStatus();
	return (
		<S.Layout isWhite={isWhite}>
			{children}
			<LoadingDots width={LoadingWidths.fullscreen} isHidden={!loadingStatus.isGlobalLoading} />
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div<IsWhiteType>`
		width: 100vw;
		min-height: 100vh;
		background-color: ${(props) => (props.isWhite ? Colors.white : Colors.background)};
	`;
}
