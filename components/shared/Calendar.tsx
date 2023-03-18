import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import IconButton from '../buttons/IconButton';
import { svgChevronLeft24 } from '../../styles/svgs';
import { Fonts } from '../../styles/fonts';
import useChange from '../../hooks/useChange';
import withoutPropagation from '../../utils/withoutPropagation';
import { svgChevronRight24 } from '../../styles/svgs';
import { useEffect } from 'react';

const days = ['월', '화', '수', '목', '금', '토', '일'];
const datesInMarch = Array(31)
	.fill(0)
	.map((_, i) => i + 1);
const datesInApril = Array(30)
	.fill(0)
	.map((_, i) => i + 1);

export default function Calendar({
	startDate,
	endDate,
	onChangeStartDate,
	onChangeEndDate,
	isHidden,
	onClose,
	isApril,
	onSelectApril,
	onSelectMarch,
}: CalendarProps) {
	const [hoveredDate, onChangeHoveredDate] = useChange(0);

	const getDateWithBase = (date: number) => (isApril ? 400 + date : 300 + date);

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

	useEffect(() => {
		if (startDate && endDate) onClose();
	}, [startDate, endDate]);

	return (
		<S.Container isHidden={isHidden}>
			<h1>
				<IconButton
					svgIcon={svgChevronLeft24}
					onClick={(e) => withoutPropagation(e, onSelectMarch)}
					disabled={!isApril}
				/>
				2023. {isApril ? 4 : 3}
				<IconButton
					svgIcon={svgChevronRight24}
					onClick={(e) => withoutPropagation(e, onSelectApril)}
					disabled={isApril}
				/>
			</h1>
			<div>
				{days.map((day, i) => (
					<S.Day key={i}>{day}</S.Day>
				))}
				{(isApril ? datesInApril : datesInMarch).map((date) => (
					<S.DateBackground
						isStartDate={startDate === getDateWithBase(date)}
						isEndDate={endDate === getDateWithBase(date)}
						isPeriod={checkIfPeriod(getDateWithBase(date))}
						isPeriodPreview={checkIfPeriodPreview(getDateWithBase(date))}
						isHoveredDate={hoveredDate === getDateWithBase(date)}
						onMouseOver={() => onHoverDate(getDateWithBase(date))}
						onMouseLeave={() => onChangeHoveredDate(0)}
						isApril={isApril}
						key={date}>
						<S.Date
							isStartDate={startDate === getDateWithBase(date)}
							isEndDate={endDate === getDateWithBase(date)}
							isHoveredDate={hoveredDate === getDateWithBase(date)}
							onClick={() => onClickDate(getDateWithBase(date))}
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
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 104%);
		z-index: 10;

		> h1 {
			${Fonts.heading18bold}
			position: relative;
			text-align: center;
			margin-bottom: 1.4rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
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
			grid-column: ${(props) => (props.isApril ? '6/7' : '3/4')};
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
