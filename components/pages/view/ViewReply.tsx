import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import IconButton from '../../buttons/IconButton';
import { svgOpen, svgTime, svgPrevS, svgNextS } from '../../../styles/svgs';
import { Fonts } from '../../../styles/fonts';
import ViewForms from './ViewForms';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import useApplication from '../../../hooks/useApplication';
import useApplicant from '../../../hooks/useApplicant';
import parseSubmitDate from '../../../utils/parseSubmitDate';

export default function ViewReply({
	isDrawerOpen,
	onOpenDrawer,
	page,
	onPrevPage,
	onNextPage,
}: ViewReplyProps) {
	const { applicant } = useApplicant();
	const { application } = useApplication();

	const isFirstPage = () => page === 1;
	const isLastPage = () => page === getTotalPages();
	const getTotalPages = () => application.data.forms.length;

	return (
		<S.Container isOpen={!isDrawerOpen}>
			<S.Taskbar>
				<div>
					<CustomButton
						svgIcon={svgPrevS}
						label={'이전 페이지'}
						onClick={onPrevPage}
						buttonType={ButtonTypes.line}
						buttonSize={ButtonSizes.medium}
						isHidden={isFirstPage()}
					/>
					<S.Page>
						{page}/{getTotalPages()}
					</S.Page>
					<CustomButton
						svgIcon={svgNextS}
						label={'다음 페이지'}
						onClick={onNextPage}
						buttonType={ButtonTypes.line}
						buttonSize={ButtonSizes.medium}
						isSvgIconAtRight
						isHidden={isLastPage()}
					/>
				</div>
				{!isDrawerOpen && (
					<div onClick={onOpenDrawer}>
						<IconButton svgIcon={svgOpen} onClick={onOpenDrawer} />
					</div>
				)}
			</S.Taskbar>
			<S.ReplyBox>
				<S.ReplyPaper>
					<S.Title>
						<h1>{application.data.title}</h1>
						<p>
							{svgTime}
							{parseSubmitDate(applicant?.data.submitDate + '')}
						</p>
					</S.Title>
					<ViewForms page={page} />
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

		height: 5.6rem;
		background-color: ${Colors.white};
		border-bottom: 0.1rem solid ${Colors.gray200};
		display: flex;

		> div:nth-of-type(1) {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 2.4rem;
			width: 100%;

			> button {
				padding: 1rem 2rem;
			}
		}

		> div:nth-of-type(2) {
			width: fit-content;
			border-left: 0.1rem solid ${Colors.gray200};
			display: flex;
			align-items: center;
			padding: 1.6rem 2.4rem;
			cursor: pointer;
		}
	`;

	export const Page = styled.div`
		${Fonts.subtitle16medium}
		color: ${Colors.gray800};
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
