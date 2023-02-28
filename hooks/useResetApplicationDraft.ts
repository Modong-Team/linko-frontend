import { useDispatch } from 'react-redux';
import { resetForms } from '../modules/new/forms';
import { resetNewApplication } from '../modules/new/newApplication';
import { resetPostedFormDataId } from '../modules/new/postedFormDataId';
import { resetNewApplicationId } from '../modules/new/newApplicationId';

export default function useResetApplicationDraft() {
	const dispatch = useDispatch();
	const onResetApplicationDraft = () => {
		dispatch(resetForms());
		dispatch(resetNewApplication());
		dispatch(resetNewApplicationId());
		dispatch(resetPostedFormDataId());
	};
	return { onResetApplicationDraft };
}
