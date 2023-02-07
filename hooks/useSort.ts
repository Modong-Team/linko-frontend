import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { sortNameAsc, sortRateAsc, sortRateDesc } from '../modules/main/sort';

export default function useSort() {
	const sort = useSelector(({ sort }: RootState) => sort);
	const dispatch = useDispatch();

	const onSortNameAsc = () => dispatch(sortNameAsc());
	const onSortRateAsc = () => dispatch(sortRateAsc());
	const onSortRateDesc = () => dispatch(sortRateDesc());

	return {
		sort,
		onSortNameAsc,
		onSortRateAsc,
		onSortRateDesc,
	};
}
