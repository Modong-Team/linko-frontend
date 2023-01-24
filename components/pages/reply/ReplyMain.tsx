import { SC } from '../../../styles/styled';
import ReplyEssentials from './ReplyEssentials';
import ReplyForms from './ReplyForms';

export default function ReplyMain({ page }: PageProps) {
	return (
		<SC.NewMainContainer>
			{page === -1 && <ReplyEssentials />}
			{page !== -1 && <ReplyForms formIdx={page} />}
		</SC.NewMainContainer>
	);
}
