import styled from 'styled-components';
import SignUpOptionButton from '../../buttons/SignUpOptionButton';
import { svgNewClub, svgExistClub } from '../../../styles/svgs';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';

export default function RegisterPage() {
	const onRouteToSignUpClub = useRouteToPath(Paths.registerClub);
	return (
		<S.Container>
			<SignUpOptionButton //
				svgIcon={svgNewClub}
				label={'신규 동아리 등록'}
				onClick={onRouteToSignUpClub}
			/>
			<SignUpOptionButton
				svgIcon={svgExistClub}
				label={'기존 동아리 운영진 가입'}
				onClick={console.log}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		gap: 2.4rem;
	`;
}
