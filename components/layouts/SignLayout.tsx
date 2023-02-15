import { Header } from '../shared';
import DefaultLayout from './DefaultLayout';
import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';

export default function SignLayout({
	children,
	title,
	isOptionPage,
	isMemberCompletePage,
}: SignLayoutProps) {
	return (
		<DefaultLayout isWhite>
			<Header />
			<S.Layout isException={isOptionPage} isMemberCompletePage={isMemberCompletePage ?? false}>
				{title && !isMemberCompletePage && <h1>{title}</h1>}
				{title && isMemberCompletePage && <pre>{title.split('.').join('.\n')}</pre>}
				{children}
			</S.Layout>
		</DefaultLayout>
	);
}

namespace S {
	export const Layout = styled.div<IsExceptionType & IsMemberCompletePageType>`
		width: ${(props) => (props.isException ? '58.4rem' : '40rem')};
		margin: 8rem auto;
		margin-top: 12rem;
		display: flex;
		flex-direction: column;
		gap: ${(props) => (props.isMemberCompletePage ? '2rem' : '6rem')};

		> h1,
		> pre {
			${Fonts.heading26bold}
			text-align: center;
		}
	`;
}
