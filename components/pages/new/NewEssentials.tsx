import { EssentialCheckInput } from '../../inputs';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';

export default function NewEssentials() {
	return (
		<S.Container>
			<h1>지원자 정보</h1>
			<h2>아래 3가지 항목은 지원자들에게 기본적으로 제출받는 항목입니다.</h2>
			<div>
				<EssentialCheckInput label='성함' isFixed={true} />
				<EssentialCheckInput label='이메일' isFixed={true} />
				<EssentialCheckInput label='전화번호' isFixed={true} />
			</div>
			<h2>지원자에게 추가로 제출받을 항목을 선택해 주세요.</h2>
			<div>
				<EssentialCheckInput label='성별' isFixed={false} />
				<EssentialCheckInput label='생년월일' isFixed={false} />
				<EssentialCheckInput label='소속 학교' isFixed={false} />
				<EssentialCheckInput label='소속 과' isFixed={false} />
				<EssentialCheckInput label='학번' isFixed={false} />
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h1 {
			${Fonts.heading24bold}
		}

		> h2 {
			${Fonts.subtitle14medium}
			margin-top: 2.4rem;
			margin-bottom: 0.8rem;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	`;
}
