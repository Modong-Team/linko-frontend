import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import { requestSetNewApplicationId, resetNewApplicationId } from '../modules/new/newApplicationId';

export default function useNewApplicationId() {
	const newApplicationId = useSelector(({ newApplicationId }: RootState) => newApplicationId);
	const dispatch = useDispatch();

	const onRequestSetNewApplicationId = (applicationId: number) =>
		dispatch(requestSetNewApplicationId(applicationId));

	const onResetNewApplicationId = () => dispatch(resetNewApplicationId());

	return { newApplicationId, onRequestSetNewApplicationId, onResetNewApplicationId };
}
