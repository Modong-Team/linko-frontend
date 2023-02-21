import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { refreshApplicants, refreshMemos, refreshEvaluations } from '../modules/main/triggers';
import { requestResetStatus } from '../modules/main/selectedStatus';

export default function useTriggers() {
	const triggers = useSelector(({ triggers }: RootState) => triggers);
	const dispatch = useDispatch();

	const onTriggerRefreshApplicants = () => {
		dispatch(refreshApplicants(new Date()));
		dispatch(requestResetStatus());
	};

	const onTriggerRefreshMemos = () => {
		dispatch(refreshMemos(new Date()));
	};

	const onTriggerRefreshEvaluations = () => {
		dispatch(refreshEvaluations(new Date()));
	};

	return {
		triggers,
		onTriggerRefreshApplicants,
		onTriggerRefreshMemos,
		onTriggerRefreshEvaluations,
	};
}
