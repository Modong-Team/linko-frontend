import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgLink24, svgDown16 } from '../../../styles/svgs';
import useSnackBar from '../../../hooks/useSnackBar';
import SnackBar from '../../shared/SnackBar';
import MoreButton from '../../buttons/MoreButton';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import useApplication from '../../../hooks/useApplication';
import DropDown from '../../dropdowns/DropDown';
import { DynamicStyles } from '../../../styles/styles';
import { useState, useEffect } from 'react';
import {
	deleteApplication,
	patchApplicationOpen,
	patchApplicationClose,
} from '../../../api/application';
import useApplicationId from '../../../hooks/useApplicationId';
import useActive from '../../../hooks/useActive';
import SubmitModal from '../../modals/SubmitModal';
import { Icons } from '../../../styles/icons';
import { ApplicationStatus } from '../../../constants/applicationStatus';
import ClipBoard from '../../shared/ClipBoard';
import useTriggers from '../../../hooks/useTriggers';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';
import ClipBoardModal from '../../modals/ClipBoardModal';

export default function MainMeta() {
	const { application } = useApplication();
	const { applicationId } = useApplicationId();
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();
	const [isShowStopRecruitDropDown, setIsShowStopRecruitDropDown] = useState(false);
	const [isShowOpenModal, onShowOpenModal, onHideOpenModal] = useActive();
	const [isShowClipBoardModal, onShowClipBoardModal, onHideClipBoardModal] = useActive();
	const { triggers, onTriggerRefreshMain } = useTriggers();
	const onRouteToMain = useRouteToPath(Paths.main);
	const onRouteToEdit = useRouteToPath(Paths.edit + '/' + applicationId);

	const checkIfOpen = () => application?.data.status === ApplicationStatus.open;
	const checkIfClose = () => application?.data.status === ApplicationStatus.close;
	const checkIfPrepare = () => application?.data.status === ApplicationStatus.prepare;

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
		if (checkIfOpen()) return patchClose;
		if (checkIfClose()) return patchOpen;
		if (checkIfPrepare()) return onRouteToEdit;
		else return () => alert('지원서의 상태값이 유효하지 않습니다.');
	};

	const patchOpen = async () => {
		if (!applicationId) return;
		await patchApplicationOpen(applicationId);
	};

	const patchClose = async () => {
		if (!applicationId) return;
		await patchApplicationClose(applicationId);
		onTriggerRefreshMain();
	};

	const onConfirmOpenModal = async () => {
		await patchOpen();
		onHideOpenModal();
		onShowClipBoardModal();
	};

	const onConfirmClipBoardModal = () => {
		onHideClipBoardModal();
		onTriggerRefreshMain();
	};

	const onToggleStopRecruit = () => setIsShowStopRecruitDropDown(!isShowStopRecruitDropDown);

	const onDelete = async () => {
		if (applicationId) await deleteApplication(applicationId);
		onRouteToMain();
		onTriggerRefreshMain();
	};

	useEffect(() => {
		setIsShowStopRecruitDropDown(false);
		return () => {
			onHideOpenModal();
			onHideClipBoardModal();
		};
	}, [applicationId, triggers.main]);

	return (
		<S.BoardHeader isWhite={!checkIfPrepare()}>
			<h1>{application?.data.title}</h1>
			<div>
				{!checkIfPrepare() && (
					<>
						<S.BoardLinkLabel>{svgLink24}지원 링크</S.BoardLinkLabel>
						<ClipBoard onTriggerSnackBar={onTriggerSnackBar} urlId={application?.data.urlId + ''} />
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
					styleDisabled={checkIfClose()}
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
				onConfirm={onConfirmOpenModal}
				onConfirmLabel={'모집 시작'}
				isHidden={!isShowOpenModal}
			/>
			<ClipBoardModal
				onTriggerSnackBar={onTriggerSnackBar}
				urlId={application?.data.urlId ?? ''}
				onConfirm={onConfirmClipBoardModal}
				isHidden={!isShowClipBoardModal}
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

	export const BoardVertical = styled.div`
		cursor: pointer;
	`;
}
