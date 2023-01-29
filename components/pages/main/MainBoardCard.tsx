import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import MoreButton from '../../buttons/MoreButton';
import { svgStar16 } from '../../../styles/svgs';

export default function MainBoardCard() {
	return (
		<S.Container>
			<h3>박병진</h3>
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
			<h4>2022. 11. 2</h4>
			<S.StatusElements>
				<StatusElement />
				<StatusElement />
			</S.StatusElements>
		</S.Container>
	);
}

function StatusElement() {
	return (
		<S.Status>
			{svgStar16}
			9.3
		</S.Status>
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

	export const Status = styled.div`
		${Fonts.body12medium}
		padding: 0.3rem 0.8rem;
		background-color: ${Colors.blue100};
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 2rem;
	`;
}
