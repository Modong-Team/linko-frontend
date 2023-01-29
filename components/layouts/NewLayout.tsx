import { Header } from '../shared';
import DefaultLayout from './DefaultLayout';

export default function NewLayout({ children, isNew }: NewLayoutProps) {
	return (
		<DefaultLayout>
			<Header isNew={isNew} />
			{children}
		</DefaultLayout>
	);
}
