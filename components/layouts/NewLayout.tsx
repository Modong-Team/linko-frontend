import { WithHeaderLayout } from '.';
import { Header } from '../shared';

export default function NewLayout({ children }: ChildrenType) {
	return (
		<WithHeaderLayout>
			<Header />
			{children}
		</WithHeaderLayout>
	);
}
