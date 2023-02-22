import styled from 'styled-components';
import CustomButton from '../../buttons/CustomButton';
import AutoResizeTextArea from '../../inputs/AutoResizeTextArea';
import useInput from '../../../hooks/useInput';
import useActive from '../../../hooks/useActive';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { svgArrowPrev, svgStar } from '../../../styles/svgs';
import useApplicantId from '../../../hooks/useApplicantId';
import { ChangeEvent, useState, useEffect } from 'react';
import {
	postEvaluation,
	getEvaluation,
	putEvaluation,
	deleteEvaluation,
} from '../../../api/evaluation';
import useTriggers from '../../../hooks/useTriggers';
import IconButton from '../../buttons/IconButton';

export default function ViewRateEditTab({
	onSelectRateTab,
	isPrevRateExist,
}: ViewRateEditTabProps) {
	const { applicantId } = useApplicantId();
	const [isFocus, onFocus, onBlur] = useActive();
	const [comment, onChangeComment, _, onManuallyChangeComment] = useInput();
	const [scoreInteger, onChangeScoreInteger, __, onManuallyChangeScoreInteger] = useInput();
	const [scoreDecimal, onChangeScoreDecimal, ___, onManuallyChangeScoreDecimal] = useInput();
	const [evaluationId, setEvaluationId] = useState<number>();
	const { onTriggerRefreshEvaluations } = useTriggers();

	const onValidateScoreInteger = (e: ChangeEvent<HTMLInputElement>) => {
		if (isNaN(+e.target.value)) return;
		if (+e.target.value >= 10) {
			onManuallyChangeScoreInteger(10 + '');
			onManuallyChangeScoreDecimal(0 + '');
		} else onChangeScoreInteger(e);
	};

	const onValidateScoreDecimal = (e: ChangeEvent<HTMLInputElement>) => {
		if (isNaN(+e.target.value)) return;
		if (+scoreInteger === 10) {
			onManuallyChangeScoreDecimal(0 + '');
		} else onChangeScoreDecimal(e);
	};

	const onSubmit = async () => {
		if (!applicantId) return;
		const score = +(scoreInteger + '.' + scoreDecimal);
		/* POST */
		if (!isPrevRateExist) await postEvaluation(applicantId, { score, comment });
		/* PUT */
		if (isPrevRateExist && evaluationId)
			await putEvaluation(applicantId, evaluationId, { newScore: score, newComment: comment });
		onTriggerRefreshEvaluations();
		onSelectRateTab();
	};

	const onDelete = async () => {
		if (!applicantId || !evaluationId) return;
		await deleteEvaluation(applicantId, evaluationId);
		onTriggerRefreshEvaluations();
		onSelectRateTab();
	};

	const setPrevRateData = async () => {
		if (!applicantId) return;
		const get = await getEvaluation(applicantId);
		setEvaluationId(get.data.id);
		onManuallyChangeComment(get.data.comment);
		const score = get.data.score + '';
		if (/\./.test(score)) {
			onManuallyChangeScoreInteger(score.split('.')[0]);
			onManuallyChangeScoreDecimal(score.split('.')[1]);
			return;
		}
		onManuallyChangeScoreInteger(score);
		onManuallyChangeScoreDecimal('0');
	};

	useEffect(() => {
		if (isPrevRateExist) setPrevRateData();
	}, [applicantId, isPrevRateExist]);

	return (
		<S.Container>
			<S.Buttons>
				<IconButton svgIcon={svgArrowPrev} onClick={onSelectRateTab} />
				{isPrevRateExist && (
					<CustomButton
						label={'평가 삭제'}
						onClick={onDelete}
						buttonType={'line'}
						buttonSize={'small'}
					/>
				)}
			</S.Buttons>
			<div>
				<h2>{svgStar} 점수</h2>
				<S.ScoreBox>
					<S.Digit>
						<input
							placeholder='0'
							maxLength={2}
							value={scoreInteger}
							onChange={onValidateScoreInteger}
							type={'tel'}
						/>
					</S.Digit>
					<span>.</span>
					<S.Digit>
						<input
							placeholder='0'
							maxLength={1}
							value={scoreDecimal}
							onChange={onValidateScoreDecimal}
							type={'tel'}
						/>
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
					onClick={onSubmit}
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

		> div:not(:first-of-type) {
			:last-of-type {
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}

			> h2 {
				${Fonts.subtitle16semibold}
				display: flex;
				align-items: center;
				gap: 0.4rem;
				margin-bottom: 0.8rem;
			}

			> button {
				width: 100%;
				margin-top: 2.4rem;
			}
		}
	`;

	export const Buttons = styled.div`
		display: flex;

		> button:nth-of-type(2) {
			position: absolute;
			right: 2.4rem;
			transform: translateY(-0.4rem);
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

			:last-of-type {
				${Fonts.subtitle20medium}
				color: ${Colors.gray600};
			}
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
