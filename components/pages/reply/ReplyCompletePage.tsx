import styled from 'styled-components';
import { Devices } from '../../../styles/devices';
import ReplyComplete from './ReplyComplete';

export default function ReplyCompletePage({ applicantId }: ReplyCompletePageProps) {
	return (
		<S.Container>
			<ReplyComplete applicantId={applicantId} />
		</S.Container>
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
