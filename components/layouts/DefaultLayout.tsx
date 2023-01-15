import styled from 'styled-components';

export default function DefaultLayout({ children }: ChildrenType) {
	return <S.Layout>{children}</S.Layout>;
}

namespace S {
	export const Layout = styled.div`
		width: 100vw;
		min-height: 100vh;
		background-color: aliceblue;
	`;
}
