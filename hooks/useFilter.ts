import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { filterAll, filterEvaluating, filterFail } from '../modules/main/filter';

export default function useFilter() {
	const filter = useSelector(({ filter }: RootState) => filter);
	const dispatch = useDispatch();

	const onFilterAll = () => dispatch(filterAll());
	const onFilterEvaluating = () => dispatch(filterEvaluating());
	const onFilterFail = () => dispatch(filterFail());

	return {
		filter,
		onFilterAll,
		onFilterEvaluating,
		onFilterFail,
	};
}
