import styled from 'styled-components';
import SignUpOptionButton from '../../buttons/SignUpOptionButton';
import { svgNewClub, svgExistClub } from '../../../styles/svgs';

export default function SignUpPage() {
	return (
		<S.Container>
			<SignUpOptionButton //
				svgIcon={svgNewClub}
				label={'신규 동아리 등록'}
				onClick={console.log}
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
