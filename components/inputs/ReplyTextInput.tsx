import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { css } from 'styled-components';

export default function ReplyTextInput({ label, questionId, errorMessage }: ReplyTextInputProps) {
	return (
		<S.Container isError={false}>
			<input placeholder=' ' />
			<label>{label}</label>
			<p>{errorMessage}</p>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsErrorType>`
		position: relative;

		&:first-of-type {
			margin-top: 3.5rem;
		}

		&:not(:last-of-type) {
			margin-bottom: 3.5rem;
		}

		&,
		> * {
			transition: 0.3s ease;
		}

		> input {
			width: 100%;
			padding: 0.7rem 0.2rem;
			background-color: transparent;
			border-bottom: 0.1rem solid ${Colors.gray200};
			caret-color: ${Colors.blue500};
			position: relative;
			z-index: 1;

			&:hover {
				border-color: ${Colors.gray700};
			}

			&:focus {
				border-color: ${Colors.blue500};
			}
		}

		/* Default */
		> label {
			${Fonts.body16regular}
			color: ${Colors.gray500};
			position: absolute;
			left: 0.2rem;
			bottom: 0.8rem;
			z-index: 0;
		}

		/* Focus OR Filled */
		> input:focus + label,
		> input:not(:placeholder-shown) + label {
			${Fonts.button13medium}
			color: ${Colors.gray700};
			transform: translateY(calc(-100% - 0.9rem));
		}

		/* Error Message */
		> p {
			${Fonts.body12medium}
			color: ${Colors.red500};
			position: absolute;
			bottom: -0.4rem;
			transform: translateY(100%);
			visibility: ${(props) => !props.isError && 'hidden'};
			opacity: ${(props) => (!props.isError ? 0 : 1)};
		}

		/* Error */
		${(props) => props.isError && ErrorStyle}
	`;

	const ErrorStyle = css`
		margin-bottom: calc(3.2rem + 2.2rem);

		> input {
			border-color: ${Colors.red500};
		}

		> label {
			color: ${Colors.red500};
		}
	`;
}
