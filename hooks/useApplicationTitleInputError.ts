import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setApplicationTitleInputError } from '../modules/applicationTitleInputError';

export default function useApplicationTitleInputError() {
	const applicationTitleInputError = useSelector(
		({ applicationTitleInputError }: RootState) => applicationTitleInputError,
	);
	const dispatch = useDispatch();

	const onSetApplicationTitleInputError = (isError: boolean) =>
		dispatch(setApplicationTitleInputError(isError));

	return { applicationTitleInputError, onSetApplicationTitleInputError };
}
