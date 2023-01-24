import { WithHeaderLayout } from '.';
import { Header } from '../shared';

export default function ReplyCompleteLayout({ children }: ChildrenType) {
	return (
		<WithHeaderLayout>
			<Header />
			{children}
		</WithHeaderLayout>
	);
}
