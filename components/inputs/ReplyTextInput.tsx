import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { css } from 'styled-components';
import { Devices } from '../../styles/devices';
import AutoResizeTextArea from './AutoResizeTextArea';

export default function ReplyTextInput({
	name,
	value,
	onChange,
	onBlur,
	label,
	errorMessage,
	isSingleLine,
	maxLength,
	minLength,
	pattern,
	type,
	isError,
}: ReplyTextInputProps) {
	return (
		<S.Container isError={isError ?? false}>
			{!isSingleLine && <AutoResizeTextArea value={value} onChange={onChange} placeholder={' '} />}
			{isSingleLine && (
				<input
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={' '}
					maxLength={maxLength}
					minLength={minLength}
					pattern={pattern}
					type={type}
					autoComplete={'new-password'}
					name={name}
				/>
			)}
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

			@media ${Devices.mobile} {
				margin-top: 4rem;
			}
		}

		&:not(:last-of-type) {
			margin-bottom: 3.5rem;

			@media ${Devices.mobile} {
				margin-bottom: 4rem;
			}
		}

		&,
		> * {
			transition: 0.3s ease;
		}

		> textarea,
		> input {
			width: 100%;
			padding: 0.7rem 0.2rem;
			background-color: transparent;
			border-bottom: 0.1rem solid ${Colors.gray200};
			caret-color: ${Colors.blue500};
			position: relative;
			z-index: 1;
			overflow: hidden;

			&:hover {
				border-color: ${Colors.gray700};
			}

			&:focus {
				border-color: ${Colors.blue500};
			}

			@media ${Devices.mobile} {
				padding: 0.2rem;
				line-height: 150%;
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
		> textarea:focus + label,
		> textarea:not(:placeholder-shown) + label,
		> input:focus + label,
		> input:not(:placeholder-shown) + label {
			${Fonts.button13medium}
			color: ${Colors.gray700};
			bottom: 100%;

			@media ${Devices.mobile} {
				bottom: calc(100% + 0.25rem);
			}
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

		> textarea,
		> input {
			border-color: ${Colors.red500};
		}

		> label {
			color: ${Colors.red500};
		}
	`;
}
