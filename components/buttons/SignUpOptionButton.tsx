import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export default function SignUpOptionButton({
	svgIcon,
	label,
	onClick,
}: CommonButtonProps & IconButtonProps) {
	return (
		<S.Container onClick={onClick}>
			<div>{svgIcon}</div>
			<h2>{label}</h2>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.button`
		width: 28rem;
		height: 20rem;
		padding: 2.4rem;
		text-align: center;
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 1.6rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.5rem;
		transition: 0.3s ease;

		:hover,
		:focus {
			box-shadow: 0px 7px 20px 0px #edeef3;
		}

		> div {
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		> h2 {
			${Fonts.heading18bold}
		}
	`;
}
