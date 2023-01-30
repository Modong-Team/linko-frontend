import FilterButton from '../../buttons/FilterButton';
import MainBoardColumn from './MainBoardColumn';
import styled from 'styled-components';
import { ApplicantStatusCodeKeys } from '../../../constants/applicantStatusCode';

export default function MainBoard() {
	return (
		<S.Container>
			<S.FilterButtons>
				<FilterButton
					label1={'모든 지원자'}
					label2={'평가중'}
					label3={'탈락'}
					onClick1={() => alert('미구현')}
					onClick2={() => alert('미구현')}
					onClick3={() => alert('미구현')}
				/>
				<FilterButton
					label1={'가나다 순'}
					label2={'높은 평점 순'}
					label3={'낮은 평점 순'}
					onClick1={() => alert('미구현')}
					onClick2={() => alert('미구현')}
					onClick3={() => alert('미구현')}
				/>
			</S.FilterButtons>
			<S.BoardContainer>
				<MainBoardColumn applicantStatusCode={ApplicantStatusCodeKeys.accept} />
				<MainBoardColumn applicantStatusCode={ApplicantStatusCodeKeys.application} />
				<MainBoardColumn applicantStatusCode={ApplicantStatusCodeKeys.interview} />
				<MainBoardColumn applicantStatusCode={ApplicantStatusCodeKeys.success} />
			</S.BoardContainer>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		padding-bottom: 3.2rem;
	`;

	export const FilterButtons = styled.div`
		padding: 1.6rem 0;
		display: flex;
		gap: 0.6rem;
	`;

	export const BoardContainer = styled.div`
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 1.2rem;
	`;
}
