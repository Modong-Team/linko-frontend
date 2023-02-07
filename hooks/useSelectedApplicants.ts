import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { deselectApplicant, selectApplicant } from '../modules/main/selectedApplicants';

export default function useSelectedApplicants() {
	const selectedApplicants = useSelector(({ selectedApplicants }: RootState) => selectedApplicants);
	const dispatch = useDispatch();

	const onSelectApplicant = (id: number) => dispatch(selectApplicant(id));

	const onDeselectApplicant = (id: number) => dispatch(deselectApplicant(id));

	return { selectedApplicants, onSelectApplicant, onDeselectApplicant };
}
