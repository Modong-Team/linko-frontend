import { Header } from '../shared';
import DefaultLayout from './DefaultLayout';
import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';

export default function SignLayout({ children, title, isOptionPage }: SignLayoutProps) {
	return (
		<DefaultLayout isWhite>
			<Header />
			<S.Layout isException={isOptionPage}>
				{title && <h1>{title}</h1>}
				{children}
			</S.Layout>
		</DefaultLayout>
	);
}

namespace S {
	export const Layout = styled.div<IsExceptionType>`
		width: ${(props) => (props.isException ? '58.4rem' : '40rem')};
		margin: 0 auto;
		margin-top: 12rem;
		display: flex;
		flex-direction: column;
		gap: 6rem;

		> h1 {
			${Fonts.heading26bold}
			text-align: center;
		}
	`;
}
