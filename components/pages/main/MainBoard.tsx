import FilterButton from '../../buttons/FilterButton';
import MainBoardColumn from './MainBoardColumn';
import styled from 'styled-components';
import { ApplicantStatusCodeKeys } from '../../../constants/applicantStatusCode';

export default function MainBoard() {
	return (
		<S.Container>
			<S.FilterButtons>
				<FilterButton
					label={'모든 지원자'}
					onClick={() => alert('미구현 피쳐')}
					onBlur={() => alert('미구현 피쳐')}
				/>
				<FilterButton
					label={'가나다 순'}
					onClick={() => alert('미구현 피쳐')}
					onBlur={() => alert('미구현 피쳐')}
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
