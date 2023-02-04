import styled from 'styled-components';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgStar, svgDivider } from '../../../styles/svgs';
import CustomButton from '../../buttons/CustomButton';
import ViewComment from './ViewComment';
import ViewCommentBox from './ViewCommentBox';

export default function ViewRateTab({ onSelectRateEditTab }: ViewRateTabProps) {
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
				label={'평가하기'}
				onClick={onSelectRateEditTab}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
				width={'100%'}
			/>
			<ViewCommentBox>
				<ViewComment
					name={'linko'}
					content={'멋진 분이시네요!!'}
					isMine={false}
					rate={10}
					isRateComment
				/>
				<ViewComment
					name={'nyang'}
					content={'좋은 사람 같긴 해요.'}
					isMine={true}
					rate={8}
					isRateComment
				/>
				<ViewComment
					name={'ruby'}
					content={'나름 괜찮은데요?'}
					isMine={false}
					rate={9}
					isRateComment
				/>
				<ViewComment
					name={'ruby'}
					content={'나름 괜찮은데요?'}
					isMine={false}
					rate={9}
					isRateComment
				/>
				<ViewComment
					name={'ruby'}
					content={'나름 괜찮은데요?'}
					isMine={false}
					rate={9}
					isRateComment
				/>
				<ViewComment
					name={'ruby'}
					content={'나름 괜찮은데요?'}
					isMine={false}
					rate={9}
					isRateComment
				/>
				<ViewComment
					name={'ruby'}
					content={'나름 괜찮은데요?'}
					isMine={false}
					rate={9}
					isRateComment
				/>
				<ViewComment
					name={'ruby'}
					content={'나름 괜찮은데요?'}
					isMine={false}
					rate={9}
					isRateComment
				/>
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
