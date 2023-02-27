import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import { Icons } from '../../../styles/icons';
import { Fonts } from '../../../styles/fonts';

export default function ReplyClosedPage() {
	return (
		<S.Container>
			<h1>
				<span>{Icons.cry}</span>
				<br />
				모집이 마감되었어요.
				<br />
				다음에 만나요!
			</h1>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		> h1 {
			> span {
				display: inline-block;
				margin-bottom: 0.4rem;
			}

			${Fonts.heading24bold}
			text-align: center;
		}
	`;
}
