import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { setApplicants } from '../modules/main/applicants';

export default function useApplicants() {
	const applicants = useSelector(({ applicants }: RootState) => applicants);
	const dispatch = useDispatch();

	const onSetApplicants = (applicants: ResponseApplicants.Get) =>
		dispatch(setApplicants(applicants));

	return { applicants, onSetApplicants };
}
