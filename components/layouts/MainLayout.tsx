import { WithHeaderLayout } from '.';
import { Header } from '../shared';

export default function MainLayout({ children }: ChildrenType) {
	return (
		<WithHeaderLayout>
			<Header isMain />
			{children}
		</WithHeaderLayout>
	);
}
