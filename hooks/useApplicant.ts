import { RootState } from '../modules';
import { useSelector } from 'react-redux';

export default function useApplicant() {
	const applicant = useSelector(({ applicant }: RootState) => applicant);
	return { applicant };
}
