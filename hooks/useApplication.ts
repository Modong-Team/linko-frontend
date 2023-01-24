import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setApplication } from '../modules/reply/application';

export default function useApplication() {
	const application = useSelector(({ application }: RootState) => application);
	const dispatch = useDispatch();

	const onSetApplication = (application: ResponseApplication.Get) =>
		dispatch(setApplication(application));

	return {
		application,
		onSetApplication,
	};
}
