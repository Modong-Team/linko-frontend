import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import MoreButton from '../../buttons/MoreButton';
import { svgStar16, svgUser16, svgEntireCheckbox } from '../../../styles/svgs';
import parseSubmitDate from '../../../utils/parseSubmitDate';
import { Media } from '../../../styles/breakPoints';
import IconButton from '../../buttons/IconButton';
import useSelectedApplicants from '../../../hooks/useSelectedApplicants';
import { MainBoardCardContainerProps, StatusElementProps } from '../../../@types/client';
import { CardModes } from '../../../styles/cardModes';
import useSelectedStatus from '../../../hooks/useSelectedStatus';
import useApplicationId from '../../../hooks/useApplicationId';

export default function MainBoardCard({
	id,
	name,
	rate,
	submitDate,
	fail,
	isSelected,
}: MainBoardCardProps) {
	const { selectedStatus } = useSelectedStatus();
	const { selectedApplicants, onRequestSelectApplicant, onDeselectApplicant } =
		useSelectedApplicants();
	const { onRefreshApplicantsStatus } = useApplicationId();

	const onSelectFirstSingle = () => onRequestSelectApplicant(id);

	const onToggleSelect = () => {
		if (!isSelected || fail) return;
		if (checkIfSelected()) onDeselectApplicant(id);
		else onRequestSelectApplicant(id);
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

	const onCancelFail = async () => {
		/* 탈락 취소 API */
		onRefreshApplicantsStatus();
	};

	return (
		<S.Container onClick={onToggleSelect} cardMode={checkCardMode()}>
			<div>
				<h3>{name}</h3>
				{checkShouldShowMoreButton() && !fail && (
					<MoreButton
						label1={'선택하기'}
						label2={'탈락'}
						onClick1={onSelectFirstSingle}
						onClick2={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
				)}
				{checkShouldShowMoreButton() && fail && (
					<MoreButton label1={'탈락 취소'} onClick1={onCancelFail} />
				)}
				{checkShouldShowCheckButton() && (
					<IconButton svgIcon={svgEntireCheckbox} onClick={() => console.log()} />
				)}
			</div>
			<div>
				<h4>{parseSubmitDate(submitDate)}</h4>
				<S.StatusElements>
					<StatusElement label={rate + ''} isGray={false} cardMode={checkCardMode()} />
					<StatusElement label={rate + '/3'} isGray={true} cardMode={checkCardMode()} />
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
