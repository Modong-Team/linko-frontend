import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { Icons } from '../../../styles/icons';
import { svgCopy24 } from '../../../styles/svgs';
import copyToClipBoard from '../../../utils/copyToClipBoard';
import useSnackBar from '../../../hooks/useSnackBar';
import SnackBar from '../../shared/SnackBar';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';

export default function RegisterClubCompletePage({ clubId }: SignUpClubCompletePageProps) {
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();

	const onClickClipBoard = () => {
		copyToClipBoard(clubId);
		onTriggerSnackBar();
	};

	return (
		<S.Container>
			<h1>
				{Icons.hands}
				<br />
				동아리 등록이 완료되었어요.
			</h1>
			<div>
				<S.ClipBoard onClick={onClickClipBoard}>
					<div>동아리 코드</div>
					<div>{clubId}</div>
					<div>{svgCopy24}</div>
				</S.ClipBoard>
				<p>
					지금 회원 가입 하지 않으신다면 동아리 코드를 "꼭!" 따로 보관해주세요.
					<br />
					<span>동아리 코드가 없으면 회원가입 하실 수 없어요.</span>
				</p>
				<SnackBar
					label={'동아리 코드를 복사했어요.'}
					width='100%'
					bottom='-2.3rem'
					isShown={isShowSnackBar}
				/>
			</div>
			<CustomButton
				label={'운영진 회원가입'}
				onClick={console.log}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h1 {
			${Fonts.heading24bold}
			margin-bottom: 6rem;
			text-align: center;
		}

		> div {
			position: relative;

			> p {
				${Fonts.subtitle14medium}
				color: ${Colors.gray700};
				text-align: center;
				padding-top: 1.6rem;
				margin-bottom: 4rem;

				> span {
					${Fonts.button14bold}
					color: ${Colors.red900};
				}
			}
		}

		> button {
			width: 100%;
			position: relative;
			z-index: 150;
		}
	`;

	export const ClipBoard = styled.div`
		padding: 2.4rem;
		background-color: ${Colors.blue100};
		border-radius: 0.8rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		cursor: pointer;

		> div {
			:first-of-type {
				${Fonts.button14bold}
				color: ${Colors.gray800};
			}

			:nth-of-type(2) {
				${Fonts.heading26bold}
			}

			:last-of-type {
				display: flex;
				margin-left: auto;
			}
		}
	`;
}
