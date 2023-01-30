import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { requestSelectApplicant, deselectApplicant } from '../modules/main/selectedApplicants';

export default function useSelectedApplicants() {
	const selectedApplicants = useSelector(({ selectedApplicants }: RootState) => selectedApplicants);
	const dispatch = useDispatch();

	const onRequestSelectApplicant = (id: number) => dispatch(requestSelectApplicant(id));

	const onDeselectApplicant = (id: number) => dispatch(deselectApplicant(id));

	return { selectedApplicants, onRequestSelectApplicant, onDeselectApplicant };
}
