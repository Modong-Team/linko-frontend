import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export default function IconButton({ svgIcon, onClick, type, disabled }: IconButtonProps) {
	return (
		<S.Button onClick={onClick} type={type} disabled={disabled}>
			{svgIcon}
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button`
		display: flex;

		:disabled {
			cursor: default;

			> svg path {
				stroke: ${Colors.gray400};
			}
		}
	`;
}
