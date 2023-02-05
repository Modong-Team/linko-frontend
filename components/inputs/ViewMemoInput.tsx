import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgMemo } from '../../styles/svgs';
import { useEffect, useState } from 'react';
import { ButtonTypes, ButtonSizes } from '../../constants/buttons';
import CustomButton from '../buttons/CustomButton';
import AutoResizeTextArea from './AutoResizeTextArea';
import useActive from '../../hooks/useActive';

export default function ViewMemoInput({ value, onChange, onSubmit }: ViewMemoInputProps) {
	const [isFocus, onFocus, onBlur] = useActive();
	const [isEmpty, setIsEmpty] = useState(true);

	useEffect(() => {
		if (value !== '') setIsEmpty(false);
		else setIsEmpty(true);
	}, [value]);

	return (
		<S.Container>
			<S.InputBox isFocus={isFocus}>
				<AutoResizeTextArea
					value={value}
					onChange={onChange}
					placeholder={'메모를 입력해주세요.'}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				{isEmpty && svgMemo}
			</S.InputBox>
			{!isEmpty && (
				<CustomButton
					svgIcon={svgMemo}
					label={'메모 등록'}
					onClick={onSubmit}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.medium}
				/>
			)}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		flex-direction: column;

		> button {
			width: fit-content;
			margin-top: 0.8rem;
			margin-left: auto;

			rect,
			path {
				fill: white;
				stroke: white !important;
			}

			circle {
				fill: ${Colors.blue500};
				stroke: ${Colors.blue500};
			}
		}
	`;

	export const InputBox = styled.div<IsFocusType>`
		margin-top: 1.2rem;
		padding: 1.2rem 1.6rem;
		border: 0.1rem solid;
		border-color: ${(props) => (props.isFocus ? Colors.blue500 : Colors.gray200)};
		border-radius: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: 0.3s ease;

		> textarea {
			${Fonts.body14regular}
			flex-grow: 1;

			::placeholder {
				color: ${Colors.gray400};
			}
		}
	`;
}
