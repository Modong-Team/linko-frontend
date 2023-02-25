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
import { useState } from 'react';
import { deleteApplication } from '../../../api/application';
import useApplicationId from '../../../hooks/useApplicationId';

export default function MainMeta() {
	const { application } = useApplication();
	const { applicationId } = useApplicationId();
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();
	const [isShowStopRecruitDropDown, setIsShowStopRecruitDropDown] = useState(false);

	const onClickClipBoard = (url: string) => {
		copyToClipBoard(url);
		onTriggerSnackBar();
	};

	const onToggleStopRecruit = () => setIsShowStopRecruitDropDown(!isShowStopRecruitDropDown);

	const onDelete = async () => {
		if (applicationId) await deleteApplication(applicationId);
	};

	return (
		<S.BoardHeader>
			<h1>{application.data.title}</h1>
			<div>
				<S.BoardLinkLabel>{svgLink24}지원 링크</S.BoardLinkLabel>
				<S.BoardClipBoard onClick={() => onClickClipBoard(createReplyUrl(application.data.urlId))}>
					<div>{createReplyUrl(application.data.urlId)}</div>
					<div>{svgCopy24}</div>
				</S.BoardClipBoard>
				<CustomButton
					label={'모집 중'}
					onClick={onToggleStopRecruit}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.medium}
					svgIcon={svgDown16}
					isSvgIconAtRight={true}
					width={'10rem'}
					justify={'space-between'}>
					<DropDown
						option1={'모집 마감하기'}
						onClick1={() => alert('미구현')}
						isHidden={!isShowStopRecruitDropDown}
						customCSS={
							DynamicStyles.dropDownNthOptionRed(1) + DynamicStyles.dropDownTranslateToCenter(115)
						}
					/>
				</CustomButton>
				<MoreButton label1={'지원서 삭제'} onClick1={onDelete} />
			</div>
			<SnackBar label={'링크를 복사했어요.'} isShown={isShowSnackBar} />
		</S.BoardHeader>
	);
}

namespace S {
	export const BoardHeader = styled.div`
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

			> button {
				height: 4rem;

				path {
					stroke: ${Colors.white};
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
