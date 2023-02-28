import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import { addPostedFormDataId } from '../modules/new/postedFormDataId';

export default function usePostedFormDataId() {
	const postedFormDataId = useSelector(({ postedFormDataId }: RootState) => postedFormDataId);
	const dispatch = useDispatch();

	const onAddPostedFormDataId = (formId: number) => dispatch(addPostedFormDataId(formId));

	return { postedFormDataId, onAddPostedFormDataId };
}
