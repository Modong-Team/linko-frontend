import { DefaultLayout } from '.';
import { Header } from '../shared';

export default function ReplyCompleteLayout({ children }: ChildrenType) {
	return (
		<DefaultLayout>
			<Header />
			{children}
		</DefaultLayout>
	);
}
