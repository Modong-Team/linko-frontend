import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { requestSetApplicantId } from '../modules/view/applicantId';

export default function useApplicantId() {
	const applicantId = useSelector(({ applicantId }: RootState) => applicantId);
	const dispatch = useDispatch();

	const onSetApplicantId = (applicantId: number) => dispatch(requestSetApplicantId(applicantId));

	return {
		applicantId,
		onSetApplicantId,
	};
}
