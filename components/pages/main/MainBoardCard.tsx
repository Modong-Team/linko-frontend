import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import MoreButton from '../../buttons/MoreButton';
import { svgStar16, svgUser16 } from '../../../styles/svgs';
import parseSubmitDate from '../../../utils/parseSubmitDate';

export default function MainBoardCard({ id, name, rate, submitDate, fail }: MainBoardCardProps) {
	return (
		<S.Container>
			<h3>{name}</h3>
			<MoreButton
				label1={'선택하기'}
				label2={'탈락'}
				onClick1={function (): void {
					throw new Error('Function not implemented.');
				}}
				onClick2={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<h4>{parseSubmitDate(submitDate)}</h4>
			<S.StatusElements>
				<RateStatusElement label={rate} />
				<RaterStatusElement label={rate} />
			</S.StatusElements>
		</S.Container>
	);
}

function RateStatusElement({ label }: StatusElementProps) {
	return (
		<S.RateStatus>
			{svgStar16}
			{label}
		</S.RateStatus>
	);
}

function RaterStatusElement({ label }: StatusElementProps) {
	return (
		<S.RaterStatus>
			{svgUser16}
			{label}/3
		</S.RaterStatus>
	);
}

namespace S {
	export const Container = styled.div`
		padding: 1.6rem;
		padding-bottom: 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, max-content);
		justify-content: space-between;
		align-items: center;
		row-gap: 1.9rem;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;

		> h3 {
			${Fonts.heading20bold}
		}

		> h4 {
			${Fonts.body12medium}
			color:${Colors.gray500}
		}

		> button {
			justify-self: end;
		}
	`;

	export const StatusElements = styled.div`
		display: flex;
		gap: 0.4rem;
	`;

	const Status = styled.div`
		${Fonts.body12medium}
		padding: 0.3rem 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 2rem;
	`;

	export const RateStatus = styled(Status)`
		background-color: ${Colors.blue100};
	`;

	export const RaterStatus = styled(Status)`
		background-color: ${Colors.gray100};
	`;
}
