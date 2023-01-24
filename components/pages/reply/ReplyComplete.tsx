import { SC } from '../../../styles/styled';
import { Icons } from '../../../styles/icons';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';

export default function ReplyComplete({ applicantId }: ReplyCompletePageProps) {
	return (
		<S.Container>
			<h1>
				{Icons.hands}
				<br />
				{applicantId}님
				<br />
				제출이 완료되었어요!
			</h1>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		> h1 {
			${Fonts.heading24bold}
			text-align: center;
		}
	`;
}
