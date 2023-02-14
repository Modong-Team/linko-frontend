import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import IconButton from '../buttons/IconButton';
import { svgCancel12 } from '../../styles/svgs';
import { Fonts } from '../../styles/fonts';
import useChange from '../../hooks/useChange';

const days = ['월', '화', '수', '목', '금', '토', '일'];
const datesInMarch = Array(31)
	.fill(0)
	.map((_, i) => i + 1);

export default function Calendar({
	startDate,
	endDate,
	onChangeStartDate,
	onChangeEndDate,
	onClose,
	isHidden,
}: CalendarProps) {
	const [hoveredDate, onChangeHoveredDate] = useChange(0);

	const checkIfStartDateSet = () => !!startDate;
	const checkIfEndDateSet = () => !!endDate;
	const checkIfBothStartDateAndEndDateSet = () => !!startDate && !!endDate;
	const checkIfEarlierThanStartDate = (date: number) => date < startDate;
	const checkIfEqualsToStartDate = (date: number) => startDate === date;

	const checkIfPeriodPreview = (date: number) => {
		if (!checkIfStartDateSet()) return false;
		if (checkIfBothStartDateAndEndDateSet()) return false;
		return startDate <= date && date <= hoveredDate;
	};

	const onSetNewStartDate = (date: number) => {
		onChangeEndDate(0);
		onChangeHoveredDate(0);
		onChangeStartDate(date);
	};

	const onClickDate = (date: number) => {
		if (!checkIfStartDateSet()) onSetNewStartDate(date);
		else if (checkIfEqualsToStartDate(date)) onSetNewStartDate(0);
		else if (checkIfBothStartDateAndEndDateSet()) onSetNewStartDate(date);
		else if (checkIfEarlierThanStartDate(date)) onSetNewStartDate(date);
		else if (checkIfStartDateSet() && !checkIfEndDateSet()) onChangeEndDate(date);
	};

	const checkIfPeriod = (date: number) => {
		if (!startDate || !endDate) return false;
		return startDate <= date && date <= endDate;
	};

	const onHoverDate = (date: number) => {
		if (startDate === date) return false;
		onChangeHoveredDate(date);
	};

	return (
		<S.Container isHidden={isHidden}>
			<h1>
				2023. 3
				<IconButton svgIcon={svgCancel12} onClick={onClose} />
			</h1>
			<div>
				{days.map((day, i) => (
					<S.Day key={i}>{day}</S.Day>
				))}
				{datesInMarch.map((date) => (
					<S.DateBackground
						isStartDate={startDate === date}
						isEndDate={endDate === date}
						isPeriod={checkIfPeriod(date)}
						isPeriodPreview={checkIfPeriodPreview(date)}
						isHoveredDate={hoveredDate === date}
						onMouseOver={() => onHoverDate(date)}
						onMouseLeave={() => onChangeHoveredDate(0)}
						key={date}>
						<S.Date
							isStartDate={startDate === date}
							isEndDate={endDate === date}
							isHoveredDate={hoveredDate === date}
							onClick={() => onClickDate(date)}
							key={date}>
							{date}
						</S.Date>
					</S.DateBackground>
				))}
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsHiddenType>`
		width: 34rem;
		height: 34rem;
		background-color: ${Colors.white};
		box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
		border-radius: 0.8rem;
		padding: 2.4rem;
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => props.isHidden && 0};
		transition: 0.3s ease;
		position: absolute;
		right: 0;
		bottom: 0;
		transform: translate(20%, 30%);
		z-index: 10;

		> h1 {
			${Fonts.heading18bold}
			position: relative;
			text-align: center;
			margin-bottom: 1.4rem;

			> button {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-60%);
			}
		}

		> div {
			display: grid;
			grid-template-columns: repeat(7, 4.2rem);
			width: fit-content;
			margin: 0 auto;
			row-gap: 0.2rem;

			> h2,
			> div > div {
				width: 4rem;
				height: 4rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	`;

	export const Day = styled.h2`
		${Fonts.subtitle14semibold}
		color: ${Colors.gray700};
	`;

	export const DateBackground = styled.div<DateBackgroundProps>`
		/* Period Selected */
		background-color: ${(props) => props.isPeriod && Colors.blue100};
		background: ${(props) =>
			props.isStartDate &&
			props.isPeriod &&
			`linear-gradient(to right, white 50%, ${Colors.blue100} 50%)`};
		background: ${(props) =>
			props.isEndDate &&
			props.isPeriod &&
			`linear-gradient(to left, white 50%, ${Colors.blue100} 50%)`};

		/* Period Preview */
		background-color: ${(props) => props.isPeriodPreview && Colors.blue100};
		background: ${(props) =>
			props.isStartDate &&
			props.isPeriodPreview &&
			`linear-gradient(to right, white 50%, ${Colors.blue100} 50%)`};
		background: ${(props) =>
			props.isHoveredDate &&
			props.isPeriodPreview &&
			`linear-gradient(to left, white 50%, ${Colors.blue100} 50%)`};

		:first-of-type {
			grid-column: 3/4;
		}
	`;

	export const Date = styled.div<DateProps>`
		${Fonts.subtitle14medium}
		cursor: pointer;
		transition: 0.2s ease color;
		background-color: ${(props) => props.isStartDate && Colors.blue500};
		background-color: ${(props) => (props.isEndDate || props.isHoveredDate) && Colors.blue300};
		color: ${(props) =>
			(props.isStartDate || props.isEndDate || props.isHoveredDate) && Colors.white};
		border-radius: ${(props) =>
			(props.isStartDate || props.isEndDate || props.isHoveredDate) && '50%'};
	`;
}
