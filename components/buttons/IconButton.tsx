import styled from 'styled-components';

export default function IconButton({ svgIcon, onClick, type }: IconButtonProps) {
	return (
		<S.Button onClick={onClick} type={type}>
			{svgIcon}
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button`
		display: flex;
	`;
}
