import styled from 'styled-components';
import { SC } from '../../styles/styled';
import { svgModong } from '../../styles/svgs';

export default function Header() {
	return (
		<S.Container>
			<SC.HeaderLogo>{svgModong}</SC.HeaderLogo>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)`
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10;
	`;
}
