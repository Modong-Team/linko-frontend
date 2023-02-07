import FilterButton from '../../buttons/FilterButton';
import MainBoardColumn from './MainBoardColumn';
import styled from 'styled-components';
import { ApplicantStatusCodeKeys } from '../../../constants/applicantStatusCode';
import useSort from '../../../hooks/useSort';
import useFilter from '../../../hooks/useFilter';
import { FilterLabels } from '../../../constants/filters';
import { SortLabels } from '../../../constants/sorts';

export default function MainBoard() {
	const { filter, onFilterAll, onFilterEvaluating, onFilterFail } = useFilter();
	const { sort, onSortNameAsc, onSortRateAsc, onSortRateDesc } = useSort();
	return (
		<S.Container>
			<S.FilterButtons>
				<FilterButton
					label1={'모든 지원자'}
					label2={'평가중'}
					label3={'탈락'}
					onClick1={onFilterAll}
					onClick2={onFilterEvaluating}
					onClick3={onFilterFail}
					currentLabel={FilterLabels[filter]}
				/>
				<FilterButton
					label1={'가나다 순'}
					label2={'높은 평점 순'}
					label3={'낮은 평점 순'}
					onClick1={onSortNameAsc}
					onClick2={onSortRateAsc}
					onClick3={onSortRateDesc}
					currentLabel={SortLabels[sort]}
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
