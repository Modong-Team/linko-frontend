import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useClubData() {
	const clubData = useSelector(({ clubData }: RootState) => clubData);
	return { clubData };
}
