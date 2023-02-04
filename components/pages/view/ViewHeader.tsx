import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import IconButton from '../../buttons/IconButton';
import { svgCancel } from '../../../styles/svgs';

export default function ViewHeader() {
	return (
		<S.Container>
			<IconButton svgIcon={svgCancel} onClick={() => alert('돌아가기')} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)`
		justify-content: flex-end;
	`;
}
