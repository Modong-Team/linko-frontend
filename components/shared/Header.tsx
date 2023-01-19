import styled from 'styled-components';
import { SC } from '../../styles/styled';
import { svgModong } from '../../styles/svgs';
import { useDispatch } from 'react-redux';
import { requestNew } from '../../modules/api/new';

export default function Header({ isNew, isMain }: HeaderProps) {
	const dispatch = useDispatch();
	const onClick = () => dispatch(requestNew());

	return (
		<S.Container>
			<SC.HeaderLogo>{svgModong}</SC.HeaderLogo>
			{isNew && (
				<div>
					<button onClick={onClick}>저장하기</button>
					<button>작성완료</button>
				</div>
			)}
			{isMain && <div>프로필</div>}
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.HeaderContainer)`
		width: 100%;
		z-index: 10;

		> div {
			display: flex;
			gap: 1.2rem;
		}
	`;
}
