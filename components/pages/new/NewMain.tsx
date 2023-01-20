import { SC } from '../../../styles/styled';
import NewEssentials from './NewEssentials';
import NewForms from './NewForms';

export default function NewMain({ page }: NewMainProps) {
	return (
		<SC.NewMainContainer>
			{page === -1 && <NewEssentials />}
			{page !== -1 && <NewForms formIdx={page} />}
		</SC.NewMainContainer>
	);
}
