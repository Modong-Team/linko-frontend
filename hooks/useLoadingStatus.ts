import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { startGlobalLoading, finishGlobalLoading } from '../modules/loading/loadingStatus';

export default function useLoadingStatus() {
	const loadingStatus = useSelector(({ loadingStatus }: RootState) => loadingStatus);
	const dispatch = useDispatch();

	const onStartGlobalLoading = () => dispatch(startGlobalLoading());
	const onFinishGlobalLoading = () =>
		setTimeout(() => {
			dispatch(finishGlobalLoading());
		}, 500);

	return { loadingStatus, onStartGlobalLoading, onFinishGlobalLoading };
}
