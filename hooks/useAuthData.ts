import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { requestSetAuthData } from '../modules/auth/authData';

export default function useAuthData() {
	const authData = useSelector(({ authData }: RootState) => authData);
	const dispatch = useDispatch();

	const onRequestSetAuthData = (authData: ResponseLogin.Data) =>
		dispatch(requestSetAuthData(authData));

	return { authData, onRequestSetAuthData };
}
