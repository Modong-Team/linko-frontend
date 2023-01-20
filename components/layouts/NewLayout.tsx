import { WithHeaderLayout } from '.';
import { Header } from '../shared';

export default function NewLayout({ children, isNew }: NewLayoutProps) {
	return (
		<WithHeaderLayout>
			<Header isNew={isNew} />
			{children}
		</WithHeaderLayout>
	);
}
