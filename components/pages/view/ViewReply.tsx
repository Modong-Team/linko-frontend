import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import IconButton from '../../buttons/IconButton';
import { svgOpen, svgTime, svgLeft16, svgPrev, svgPrevS, svgNextS } from '../../../styles/svgs';
import { Fonts } from '../../../styles/fonts';
import ViewForms from './ViewForms';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';

export default function ViewReply({ isDrawerOpen, onOpenDrawer }: ViewReplyProps) {
	return (
		<S.Container isOpen={!isDrawerOpen}>
			<S.Taskbar>
				<CustomButton
					svgIcon={svgPrevS}
					label={'이전 페이지'}
					onClick={() => alert('이전')}
					buttonType={ButtonTypes.line}
					buttonSize={ButtonSizes.medium}
				/>
				<S.Page>1/3</S.Page>
				<CustomButton
					svgIcon={svgNextS}
					label={'다음 페이지'}
					onClick={() => alert('다음')}
					buttonType={ButtonTypes.line}
					buttonSize={ButtonSizes.medium}
					isSvgIconAtRight
				/>
				{/* {!isDrawerOpen && (
					<S.DrawerButtonBox>
						<IconButton svgIcon={svgOpen} onClick={onOpenDrawer} />
					</S.DrawerButtonBox>
				)} */}
			</S.Taskbar>
			<S.ReplyBox>
				<S.ReplyPaper>
					<S.Title>
						<h1>개발동아리 22기 모집 지원서</h1>
						<p>{svgTime}2022. 11. 2</p>
					</S.Title>
					<ViewForms />
				</S.ReplyPaper>
			</S.ReplyBox>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsOpenType>`
		margin-right: ${(props) => !props.isOpen && '36rem'};
		transition: 0.8s ease;
		display: flex;
		flex-direction: column;
		height: 100%;
	`;

	export const Taskbar = styled.div`
		flex-shrink: 0;
		padding: 0 2.4rem;
		width: 100%;
		height: 5.6rem;
		background-color: ${Colors.white};
		border-bottom: 0.1rem solid ${Colors.gray200};
		display: flex;
		align-items: center;
		justify-content: space-between;

		> button {
			padding: 1rem 2rem;
		}
	`;

	export const Page = styled.div`
		${Fonts.subtitle16medium}
		color: ${Colors.gray800};
	`;

	export const DrawerButtonBox = styled.div`
		border-left: 0.1rem solid ${Colors.gray200};
		display: flex;
		align-items: center;
		padding: 1.6rem 2.4rem;
	`;

	export const ReplyBox = styled.div`
		padding: 1.6rem 0;
		overflow: scroll;
	`;

	export const ReplyPaper = styled.div`
		width: 71.2rem;
		margin: 0 auto;
	`;

	export const Title = styled.div`
		background-color: ${Colors.white};
		padding: 2.2rem 4rem;
		padding-bottom: 2rem;
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;
		margin-bottom: 1.6rem;

		> h1 {
			${Fonts.heading26bold}
			margin-bottom: 0.8rem;
		}

		> p {
			${Fonts.subtitle14semibold}
			color: ${Colors.gray500};
			display: flex;
			align-items: center;
			gap: 0.4rem;
		}
	`;
}
