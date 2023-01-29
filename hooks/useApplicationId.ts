import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { requestSetApplicationId } from '../modules/main/applicationId';

export default function useApplicationId() {
	const applicationId = useSelector(({ applicationId }: RootState) => applicationId);
	const dispatch = useDispatch();

	const onRequestSetApplicationId = (applicationId: number) =>
		dispatch(requestSetApplicationId(applicationId));

	return { applicationId, onRequestSetApplicationId };
}
