import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { SC } from '../../../styles/styled';

export default function ViewForms() {
	return (
		<S.Container>
			<h2>개발 동아리</h2>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
			<div>
				<h3>지원 분야를 알려주세요.</h3>
				<p>프론트엔드</p>
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		display: flex;
		flex-direction: column;
		gap: 3.2rem;

		> h2 {
			${Fonts.heading24bold}
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;

			> h3 {
				${Fonts.heading18bold}
			}

			> p {
				${Fonts.body14regular}
			}
		}
	`;
}
