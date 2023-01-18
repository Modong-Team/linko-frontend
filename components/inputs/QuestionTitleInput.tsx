import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgCircleX } from '../../styles/svgs';
import IconButton from '../buttons/IconButton';

export default function QuestionTitleInput() {
	const [isFocus, setIsFocus] = useState(false);

	const onFocus = () => setIsFocus(true);
	const onBlur = () => setIsFocus(false);

	return (
		<S.Container>
			<S.Wrapper isFocus={isFocus} isError={false}>
				<input placeholder='질문을 입력하세요.' onFocus={onFocus} onBlur={onBlur} />
			</S.Wrapper>
			<IconButton svgIcon={svgCircleX} onClick={console.log} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		align-items: center;
		gap: 1.15rem;
		padding-right: 0.75rem;
	`;

	export const Wrapper = styled.div<IsFocusType & IsErrorType>`
		background-color: ${Colors.white};
		position: relative;
		border-radius: 0.4rem;
		padding: 1rem 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		border-color: ${(props) => props.isError && Colors.red500};
		border-color: ${(props) => props.isFocus && Colors.blue500};
		transition: 0.3s ease;
		flex-grow: 1;

		&:hover {
			border-color: ${(props) => !props.isFocus && !props.isError && Colors.gray700};
		}

		> input {
			${Fonts.body16regular}
			width: 100%;
			color: ${Colors.gray900};
			caret-color: ${Colors.blue500};
			background-color: ${Colors.white};

			&::placeholder {
				color: ${Colors.gray500};
			}
		}
	`;

	export const Error = styled.p`
		${Fonts.body12medium}
		color: ${Colors.red500};
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translateY(130%);
	`;
}
