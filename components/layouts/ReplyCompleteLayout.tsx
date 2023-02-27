import styled from 'styled-components';
import { DefaultLayout } from '.';
import { Devices } from '../../styles/devices';
import { Header } from '../shared';

export default function ReplyCompleteLayout({ children }: ChildrenType) {
	return (
		<DefaultLayout>
			<Header />
			<S.Container>{children}</S.Container>
		</DefaultLayout>
	);
}

namespace S {
	export const Container = styled.div`
		width: 71.2rem;
		margin: 0 auto;
		padding-top: 4rem;
		padding-bottom: 12rem;

		@media ${Devices.mobile} {
			width: 100%;
			padding: 1.6rem;
		}
	`;
}
