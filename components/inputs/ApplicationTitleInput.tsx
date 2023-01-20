import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { useState } from 'react';
import useNewApplication from '../../hooks/useNewApplication';
import React from 'react';
import useApplicationTitleInputError from '../../hooks/useApplicationTitleInputError';

export default function ApplicationTitleInput() {
	const [isFocus, setIsFocus] = useState(false);
	const { newApplication, onSetNewApplicationTitle } = useNewApplication();
	const { applicationTitleInputError, onSetApplicationTitleInputError } =
		useApplicationTitleInputError();

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		onSetNewApplicationTitle(e.target.value);
	};

	const onFocus = () => {
		setIsFocus(true);
		onSetApplicationTitleInputError(false);
	};

	const onBlur = () => setIsFocus(false);

	return (
		<S.Container isFocus={isFocus} isError={applicationTitleInputError}>
			<input
				placeholder='공고 제목을 입력해주세요'
				onFocus={onFocus}
				onBlur={onBlur}
				value={newApplication.title}
				onChange={onChangeTitle}
			/>
			<S.Error isError={applicationTitleInputError}>내용을 입력해주세요.</S.Error>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsFocusType & IsErrorType>`
		background-color: ${Colors.white};
		position: relative;
		border-radius: 0.8rem;
		padding: 2.2rem 4rem;
		border: 0.1rem solid ${Colors.gray200};
		border-color: ${(props) => props.isError && Colors.red500};
		border-color: ${(props) => props.isFocus && Colors.blue500};
		transition: 0.3s ease;

		&:hover {
			border-color: ${(props) => !props.isFocus && !props.isError && Colors.gray700};
		}

		> input {
			${Fonts.heading26bold}
			width: 100%;
			color: ${Colors.gray900};
			caret-color: ${Colors.blue500};
			background-color: ${Colors.white};

			&::placeholder {
				color: ${Colors.gray500};
			}
		}
	`;

	export const Error = styled.p<IsErrorType>`
		${Fonts.body12medium}
		color: ${Colors.red500};
		position: absolute;
		left: 0;
		top: 0;
		transform: translateY(-125%);
		transition: 0.3s ease;
		visibility: ${(props) => !props.isError && 'hidden'};
		opacity: ${(props) => (!props.isError ? '0' : '1')};
	`;
}
