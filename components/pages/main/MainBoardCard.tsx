import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import MoreButton from '../../buttons/MoreButton';
import { svgStar16, svgUser16 } from '../../../styles/svgs';
import parseSubmitDate from '../../../utils/parseSubmitDate';
import { Media } from '../../../styles/breakPoints';
import useSelectedApplicants from '../../../hooks/useSelectedApplicants';
import {
	MainBoardCardContainerProps,
	MainBoardCardProps,
	StatusElementProps,
} from '../../../@types/client';
import { CardModes } from '../../../styles/cardModes';
import useSelectedStatus from '../../../hooks/useSelectedStatus';
import { patchApplicantCancelFail, patchApplicantStatus } from '../../../api/applicant';
import { ApplicantStatusCode } from '../../../constants/applicantStatusCode';
import useTriggers from '../../../hooks/useTriggers';
import CheckIcon from '../../buttons/CheckIcon';
import useActive from '../../../hooks/useActive';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';
import useClubData from '../../../hooks/useClubData';

export default function MainBoardCard({
	id,
	name,
	rate,
	submitDate,
	numOfEvaluator,
	fail,
	isSelected,
	applicantStatusCode,
}: MainBoardCardProps) {
	const onRouteToView = useRouteToPath(Paths.view + '/' + id);
	const { clubData } = useClubData();
	const { selectedStatus, onSelectStatus } = useSelectedStatus();
	const { selectedApplicants, onSelectApplicant, onDeselectApplicant } = useSelectedApplicants();
	const { onTriggerRefreshApplicants } = useTriggers();
	const [isHover, onMouseOver, onMouseLeave] = useActive();

	const onClickCard = () => {
		if (!selectedStatus) onRouteToView();
		else onToggleSelect();
	};

	const onToggleSelect = () => {
		if (!isSelected || fail) return;
		if (checkIfSelected()) onDeselectApplicant(id);
		else onSelectApplicant(id);
	};

	const onSelectFirstSingle = () => {
		onSelectStatus(applicantStatusCode);
		onSelectApplicant(id);
	};

	const checkIfSelected = () => selectedApplicants.includes(id);

	const checkShouldShowMoreButton = () => !selectedStatus && !isSelected;

	const checkShouldShowCheckButton = () => isSelected && !fail;

	const checkCardMode = () => {
		if (!selectedStatus && fail) return CardModes.basicOut;
		if (selectedStatus && fail) return CardModes.selectOutDisabled;
		if (selectedStatus && !isSelected) return CardModes.selectDisabled;
		if (isSelected && checkIfSelected()) return CardModes.selectSelected;
		return CardModes.basicDefault;
	};

	const onMarkAsFail = async () => {
		const failStatusCode = ApplicantStatusCode.FAIL;
		const patch = await patchApplicantStatus(id, { applicantStatusCode: failStatusCode });
		console.log(patch);
		onTriggerRefreshApplicants();
	};

	const onCancelFail = async () => {
		const patch = await patchApplicantCancelFail(id);
		console.log(patch);
		onTriggerRefreshApplicants();
	};

	return (
		<S.Container
			onClick={onClickCard}
			cardMode={checkCardMode()}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}>
			<div>
				<h3>{name}</h3>
				{checkShouldShowMoreButton() && !fail && (
					<MoreButton
						label1={'선택하기'}
						label2={'탈락'}
						onClick1={onSelectFirstSingle}
						onClick2={onMarkAsFail}
					/>
				)}
				{checkShouldShowMoreButton() && fail && (
					<MoreButton label1={'탈락 취소'} onClick1={onCancelFail} />
				)}
				{checkShouldShowCheckButton() && (
					<CheckIcon isHover={isHover} isChecked={checkIfSelected()} />
				)}
			</div>
			<div>
				<h4>{parseSubmitDate(submitDate)}</h4>
				<S.StatusElements>
					<StatusElement label={rate + ''} isGray={false} cardMode={checkCardMode()} />
					<StatusElement
						label={numOfEvaluator + '/' + clubData?.numOfMember}
						isGray={true}
						cardMode={checkCardMode()}
					/>
				</S.StatusElements>
			</div>
		</S.Container>
	);
}

function StatusElement({ label, isGray, cardMode }: StatusElementProps) {
	return (
		<S.Status isGray={isGray} cardMode={cardMode}>
			{isGray ? svgUser16 : svgStar16}
			{label}
		</S.Status>
	);
}

namespace S {
	export const Container = styled.div<MainBoardCardContainerProps>`
		padding: 1.6rem;
		padding-bottom: 1.5rem;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;

		${Media.small} {
			padding: 0.8rem 1.6rem;
			min-height: 7.6rem;
		}

		&,
		> * {
			transition: 0.3s ease;
		}

		> div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			> h3 {
				${Fonts.heading20bold}
			}

			> h4 {
				${Fonts.body12medium}
				color: ${Colors.gray500};
			}
		}

		${(props) =>
			props.cardMode === CardModes.basicOut &&
			`
			border-color: transparent;
			> div {
				> h4 {
					color: ${Colors.gray400};
				}
				> h3 {
					color: ${Colors.gray400};
				}
				> button > svg > * {
				fill: ${Colors.gray600};
				stroke: ${Colors.gray600};
				}
			}
			`}

		${(props) =>
			props.cardMode === CardModes.selectSelected &&
			`
			background-color: ${Colors.blue100};
			border-color: ${Colors.blue500};
			> div > h4 {
				color: ${Colors.gray700};
			}
			`}

		${(props) =>
			props.cardMode === CardModes.selectDisabled &&
			`
			> div {
				> h4 {
					color: ${Colors.gray600};
				}
				> h3 {
					color: ${Colors.gray500};
				}
			}
			`}

		${(props) =>
			props.cardMode === CardModes.selectOutDisabled &&
			`
			background-color: transparent;
			border-color: ${Colors.gray300};
			> div {
				> h4, > h3 {
					color: ${Colors.gray400};
				}
			}
			`}
	`;

	export const StatusElements = styled.div`
		display: flex;
		gap: 0.4rem;
	`;

	export const Status = styled.div<IsGrayType & MainBoardCardContainerProps>`
		${Fonts.body12medium}
		padding: 0.3rem 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		border-radius: 2rem;
		background-color: ${(props) => (props.isGray ? Colors.gray100 : Colors.blue100)};

		&,
		> * {
			transition: 0.2s ease;
		}

		> svg {
			position: relative;
			top: ${(props) => !props.isGray && '-0.05rem'};
		}

		${(props) =>
			props.cardMode === CardModes.basicOut &&
			`
			background-color: ${Colors.gray100};
			color: ${Colors.gray400};
			> svg > * {
				fill: ${Colors.gray400};
				stroke: ${Colors.gray400};
			}
			`}

		${(props) =>
			props.cardMode === CardModes.selectSelected &&
			`
			background-color: ${Colors.white};
			`}

		${(props) =>
			props.cardMode === CardModes.selectDisabled &&
			`
			color: ${Colors.gray600};
			`}

		${(props) =>
			props.cardMode === CardModes.selectOutDisabled &&
			`
			background-color: ${Colors.gray300};
			color: ${Colors.gray400};
			> svg > * {
				fill: ${Colors.gray400};
				stroke: ${Colors.gray400};
			}
			`}
	`;
}
