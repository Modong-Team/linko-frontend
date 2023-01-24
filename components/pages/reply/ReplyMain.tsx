import { SC } from '../../../styles/styled';
import ReplyEssentials from './ReplyEssentials';
import ReplyForms from './ReplyForms';
import styled from 'styled-components';
import { Devices } from '../../../styles/devices';

export default function ReplyMain({ page }: PageProps) {
	return (
		<S.Container>
			{page === -1 && <ReplyEssentials />}
			{page !== -1 && <ReplyForms formIdx={page} />}
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		@media ${Devices.mobile} {
			padding: 2.4rem 2rem;
		}
	`;
}
