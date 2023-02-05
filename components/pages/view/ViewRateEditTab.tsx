import styled from 'styled-components';
import CustomButton from '../../buttons/CustomButton';
import AutoResizeTextArea from '../../inputs/AutoResizeTextArea';
import useInput from '../../../hooks/useInput';
import useActive from '../../../hooks/useActive';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { svgStar16 } from '../../../styles/svgs';

export default function ViewRateEditTab({ onSelectRateTab }: ViewRateEditTabProps) {
	const [comment, onChangeComment] = useInput();
	const [isFocus, onFocus, onBlur] = useActive();

	return (
		<S.Container>
			<CustomButton
				label={'평가 취소'}
				onClick={onSelectRateTab}
				buttonType={'line'}
				buttonSize={'small'}
			/>
			<div>
				<h2>{svgStar16} 점수</h2>
				<S.ScoreBox>
					<S.Digit>
						<input placeholder='0' maxLength={2} />
					</S.Digit>
					<span>.</span>
					<S.Digit>
						<input placeholder='0' maxLength={1} />
					</S.Digit>
					<span>&nbsp;/ 10점</span>
				</S.ScoreBox>
			</div>
			<div>
				<h2>코멘트</h2>
				<S.CommentBox isFocus={isFocus}>
					<AutoResizeTextArea
						value={comment}
						onChange={onChangeComment}
						placeholder={'코멘트를 입력해주세요.'}
						onFocus={onFocus}
						onBlur={onBlur}
						row={4}
					/>
				</S.CommentBox>
				<CustomButton
					label={'평가 등록하기'}
					onClick={() => alert('평가 등록')}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.large}
				/>
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		> button {
			width: fit-content;
			margin-left: auto;
			margin-bottom: 0.3rem;
		}

		> div {
			:last-of-type {
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}

			> h2 {
				${Fonts.subtitle16semibold}
				display: flex;
				align-items: center;
				gap: 0.5rem;
				margin-bottom: 0.8rem;
			}

			> button {
				width: 100%;
				margin-top: 2.4rem;
			}
		}
	`;

	export const ScoreBox = styled.div`
		${Fonts.heading20bold}
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: fit-content;
		margin: 0 auto;

		> span {
			display: inline-block;
			margin-top: 0.5rem;
		}
	`;

	export const Digit = styled.div`
		width: 4.4rem;
		height: 5.2rem;
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.4rem;
		padding: 0.8rem 0.6rem;
		display: flex;
		justify-content: center;
		align-items: center;

		> input {
			${Fonts.heading24bold}
			width: 100%;
			text-align: center;
			font-family: inherit;

			::placeholder {
				color: ${Colors.gray400};
			}
		}
	`;

	export const CommentBox = styled.div<IsFocusType>`
		border: 0.1rem solid;
		border-color: ${(props) => (props.isFocus ? Colors.blue500 : Colors.gray200)};
		border-radius: 0.8rem;
		padding: 1.2rem 1.6rem;
		transition: 0.3s ease;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		> textarea {
			${Fonts.body14regular}
			width: 100%;

			::placeholder {
				color: ${Colors.gray600};
			}
		}
	`;
}
