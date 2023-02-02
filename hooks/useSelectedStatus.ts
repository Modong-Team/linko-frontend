import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicantStatusCodeKeys } from '../constants/applicantStatusCode';
import { selectStatus, requestResetStatus } from '../modules/main/selectedStatus';

export default function useSelectedStatus() {
	const selectedStatus = useSelector(({ selectedStatus }: RootState) => selectedStatus);
	const dispatch = useDispatch();

	const onSelectStatus = (applicantStatusCode: ValueOf<typeof ApplicantStatusCodeKeys>) =>
		dispatch(selectStatus(applicantStatusCode));

	const onRequestResetStatus = () => dispatch(requestResetStatus());

	return { selectedStatus, onSelectStatus, onRequestResetStatus };
}
