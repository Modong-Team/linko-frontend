import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, finishLoading } from '../modules/loading/loadingStatus';

export default function useLoadingStatus() {
	const loadingStatus = useSelector(({ loadingStatus }: RootState) => loadingStatus);
	const dispatch = useDispatch();

	const onStartLoading = () => dispatch(startLoading());
	const onFinsishLoading = () => dispatch(finishLoading());

	return { loadingStatus, onStartLoading, onFinsishLoading };
}
