import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgLink24, svgCopy24, svgDown16 } from '../../../styles/svgs';
import copyToClipBoard from '../../../utils/copyToClipBoard';
import useSnackBar from '../../../hooks/useSnackBar';
import SnackBar from '../../shared/SnackBar';
import MoreButton from '../../buttons/MoreButton';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import useApplication from '../../../hooks/useApplication';
import createReplyUrl from '../../../utils/createReplyUrl';
import DropDown from '../../dropdowns/DropDown';
import { DynamicStyles } from '../../../styles/styles';
import { useState, useEffect } from 'react';
import { deleteApplication } from '../../../api/application';
import useApplicationId from '../../../hooks/useApplicationId';
import useActive from '../../../hooks/useActive';
import SubmitModal from '../../modals/SubmitModal';
import { Icons } from '../../../styles/icons';
import { ApplicationStatus } from '../../../constants/applicationStatus';

export default function MainMeta() {
	const { application } = useApplication();
	const { applicationId } = useApplicationId();
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();
	const [isShowStopRecruitDropDown, setIsShowStopRecruitDropDown] = useState(false);
	const [isShowOpenModal, onShowOpenModal, onHideOpenModal] = useActive();

	const checkIfOpen = () => application.data.status === ApplicationStatus.open;
	const checkIfClose = () => application.data.status === ApplicationStatus.close;
	const checkIfPrepare = () => application.data.status === ApplicationStatus.prepare;

	const getAppropriateLabel = () => {
		if (checkIfOpen()) return '모집 중';
		if (checkIfClose()) return '모집 마감';
		if (checkIfPrepare()) return '지원서 작성 중';
	};

	const getAppropriateOption1 = () => {
		if (checkIfOpen()) return '모집 마감하기';
		if (checkIfClose()) return '모집 시작하기';
		if (checkIfPrepare()) return '지원서 수정';
	};

	const getAppropriateOnClick1 = () => {
		if (checkIfOpen()) return () => alert('모집 마감');
		if (checkIfClose()) return () => alert('모집 시작');
		if (checkIfPrepare()) return () => alert('지원서 수정');
		else return () => alert('지원서의 상태값이 유효하지 않습니다.');
	};

	const onClickClipBoard = (url: string) => {
		copyToClipBoard(url);
		onTriggerSnackBar();
	};

	const onToggleStopRecruit = () => setIsShowStopRecruitDropDown(!isShowStopRecruitDropDown);

	const onDelete = async () => {
		if (applicationId) await deleteApplication(applicationId);
	};

	useEffect(() => {
		() => onHideOpenModal();
	}, []);

	return (
		<S.BoardHeader isWhite={!checkIfPrepare()}>
			<h1>{application.data.title}</h1>
			<div>
				{!checkIfPrepare() && (
					<>
						<S.BoardLinkLabel>{svgLink24}지원 링크</S.BoardLinkLabel>
						<S.BoardClipBoard
							onClick={() => onClickClipBoard(createReplyUrl(application.data.urlId))}>
							<div>{createReplyUrl(application.data.urlId)}</div>
							<div>{svgCopy24}</div>
						</S.BoardClipBoard>
					</>
				)}
				<CustomButton
					label={getAppropriateLabel() + ''}
					onClick={onToggleStopRecruit}
					buttonType={checkIfPrepare() ? ButtonTypes.line : ButtonTypes.primary}
					buttonSize={ButtonSizes.medium}
					svgIcon={svgDown16}
					isSvgIconAtRight
					width={'12.8rem'}
					justify={'space-between'}
					gap={'0.6rem'}
					disabled={checkIfClose()}
					isLoading={!getAppropriateLabel()}>
					<DropDown
						option1={getAppropriateOption1() + ''}
						option2={checkIfPrepare() ? '모집 시작' : undefined}
						onClick1={getAppropriateOnClick1()}
						onClick2={onShowOpenModal}
						isHidden={!isShowStopRecruitDropDown}
						customCSS={
							checkIfOpen()
								? DynamicStyles.dropDownNthOptionRed(1) +
								  DynamicStyles.dropDownTranslateToCenter(115)
								: checkIfClose()
								? DynamicStyles.dropDownTranslateToCenter(115)
								: DynamicStyles.dropDownTranslateToCenter(108)
						}
					/>
				</CustomButton>
				<MoreButton label1={'지원서 삭제'} onClick1={onDelete} />
			</div>
			<SnackBar label={'링크를 복사했어요.'} isShown={isShowSnackBar} />
			<SubmitModal
				icon={Icons.dart}
				title={'지원서를 작성 완료하고 모집을 시작할까요?'}
				description={'모집이 시작되면 지원서 수정이 불가능해요.'}
				onCancel={onHideOpenModal}
				onConfirm={() => alert('모집 시작')}
				onConfirmLabel={'모집 시작'}
				isHidden={!isShowOpenModal}
			/>
		</S.BoardHeader>
	);
}

namespace S {
	export const BoardHeader = styled.div<IsWhiteType>`
		padding: 1.6rem 0rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 0.1rem solid ${Colors.gray200};

		> h1 {
			${Fonts.heading26bold}
			white-space: nowrap;
			max-width: 55%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		> div {
			display: flex;
			gap: 1.6rem;
			align-items: center;

			> * {
				flex-shrink: 0;
			}

			> button:first-of-type {
				height: 4rem;
				white-space: nowrap;

				path {
					stroke: ${(props) => (props.isWhite ? Colors.white : Colors.gray800)};
				}

				> div {
					width: 12.8rem;
				}
			}
		}
	`;

	export const BoardLinkLabel = styled.div`
		${Fonts.button14bold}
		display: flex;
		align-items: center;
		gap: 0.4rem;

		svg {
			position: relative;
			top: -0.05rem;
		}
	`;

	export const BoardClipBoard = styled.div`
		padding: 0.8rem 1.6rem;
		border-radius: 0.8rem;
		background-color: ${Colors.gray200};
		display: flex;
		align-items: center;
		height: 4rem;
		cursor: pointer;

		> div:first-of-type {
			${Fonts.body14regular}
			color: ${Colors.gray800};
			width: 16rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		> div:last-of-type {
			display: flex;
		}
	`;

	export const BoardVertical = styled.div`
		cursor: pointer;
	`;
}
