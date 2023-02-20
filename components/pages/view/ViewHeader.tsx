import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import IconButton from '../../buttons/IconButton';
import { svgCancel } from '../../../styles/svgs';
import useApplicationId from '../../../hooks/useApplicationId';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';

export default function ViewHeader() {
	const { applicationId } = useApplicationId();
	const onRouteToMain = useRouteToPath(Paths.main + '/' + applicationId);

	return (
		<S.Container>
			<IconButton svgIcon={svgCancel} onClick={onRouteToMain} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)`
		justify-content: flex-end;
	`;
}
