import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import { requestSetNewApplicationId } from '../modules/new/newApplicationId';

export default function useNewApplicationId() {
	const newApplicationId = useSelector(({ newApplicationId }: RootState) => newApplicationId);
	const dispatch = useDispatch();

	const onRequestSetNewApplicationId = (applicationId: number) =>
		dispatch(requestSetNewApplicationId(applicationId));

	return { newApplicationId, onRequestSetNewApplicationId };
}
