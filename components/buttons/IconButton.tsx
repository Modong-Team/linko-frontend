import styled from 'styled-components';

export default function IconButton({ svgIcon, onClick }: IconButtonProps) {
	return <S.Button onClick={onClick}>{svgIcon}</S.Button>;
}

namespace S {
	export const Button = styled.button`
		display: flex;
	`;
}
