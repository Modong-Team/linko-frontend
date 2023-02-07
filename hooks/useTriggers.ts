import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { refreshApplicants } from '../modules/main/triggers';
import { requestResetStatus } from '../modules/main/selectedStatus';

export default function useTriggers() {
	const triggers = useSelector(({ triggers }: RootState) => triggers);
	const dispatch = useDispatch();

	const onTriggerRefreshApplicants = () => {
		dispatch(refreshApplicants(new Date()));
		dispatch(requestResetStatus());
	};

	return {
		triggers,
		onTriggerRefreshApplicants,
	};
}
