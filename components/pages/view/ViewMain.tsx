import styled from 'styled-components';
import ViewReply from './ViewReply';
import ViewDrawer from './ViewDrawer';
import { useState } from 'react';

export default function ViewMain() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);

	const onOpenDrawer = () => setIsDrawerOpen(true);
	const onCloseDrawer = () => setIsDrawerOpen(false);

	return (
		<S.Container>
			<ViewReply isDrawerOpen={isDrawerOpen} onOpenDrawer={onOpenDrawer} />
			<ViewDrawer isDrawerOpen={isDrawerOpen} onCloseDrawer={onCloseDrawer} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		position: relative;
	`;
}
