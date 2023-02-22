import styled from 'styled-components';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgStar, svgDivider } from '../../../styles/svgs';
import CustomButton from '../../buttons/CustomButton';
import ViewComment from './ViewComment';
import ViewCommentBox from './ViewCommentBox';
import { useState, useEffect } from 'react';
import useApplicantId from '../../../hooks/useApplicantId';
import useGet from '../../../hooks/useGet';
import { getEvaluations } from '../../../api/evaluation';
import useAuthData from '../../../hooks/useAuthData';
import useLocalLoading from '../../../hooks/useLocalLoading';

export default function ViewRateTab({ onSelectRateEditTab, isPrevRateExist }: ViewRateTabProps) {
	const { authData } = useAuthData();
	const { applicantId } = useApplicantId();
	const [rates, setRates] = useState<ResponseEvaluation.GetAll>();
	const { isLocalLoading, onStartLocalLoading, onFinishLocalLoading } = useLocalLoading();

	const checkIfEvaluationExist = () => !!rates?.data.length;

	useEffect(() => {
		if (applicantId) {
			onStartLocalLoading();
			useGet(() => getEvaluations(applicantId), setRates, onFinishLocalLoading);
		}
	}, [applicantId]);

	return (
		<S.Container>
			<S.RateInfo>
				<div>
					<h3>평점</h3>
					<p>{svgStar}8.5/10</p>
				</div>
				<div>
					<h3>평가 인원</h3>
					<p>3/8</p>
				</div>
				<S.Divider>{svgDivider}</S.Divider>
			</S.RateInfo>
			<CustomButton
				label={isPrevRateExist ? '평가 수정하기' : '평가하기'}
				onClick={onSelectRateEditTab}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
				width={'100%'}
			/>
			<ViewCommentBox>
				{checkIfEvaluationExist() ? (
					rates?.data.map((rate, i) => (
						<ViewComment
							id={rate.id}
							name={rate.writerName}
							content={rate.comment}
							isMine={rate.writerId === authData?.memberId}
							rate={rate.score}
							isRateComment
							key={i}
						/>
					))
				) : (
					<p>아무도 메모를 남기지 않았어요.</p>
				)}
			</ViewCommentBox>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		flex-direction: column;
		overflow: hidden;

		> button:last-of-type {
			margin-bottom: 1.2rem;
		}
	`;

	export const RateInfo = styled.div`
		display: flex;
		position: relative;
		margin-bottom: 2.4rem;

		> div {
			width: 50%;
			display: flex;
			align-items: center;
			gap: 1.2rem;

			:nth-of-type(2) {
				padding-left: 1.7rem;
			}

			> h3 {
				${Fonts.subtitle14semibold}
				color:${Colors.gray700}
			}

			> p {
				${Fonts.heading20bold}
				display: flex;
				align-items: center;
				gap: 0.57rem;
			}
		}
	`;

	export const Divider = styled.span`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
	`;
}
