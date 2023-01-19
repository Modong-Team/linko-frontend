import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import {
	setNewApplicationClubId,
	setNewApplicationEssentials,
	setNewApplicationTitle,
	setNewApplicationUrlId,
} from '../modules/newApplication';

export default function useNewApplication() {
	const newApplication = useSelector(({ newApplication }: RootState) => newApplication);
	const dispatch = useDispatch();

	const onSetNewApplicationClubId = (clubId: number) => dispatch(setNewApplicationClubId(clubId));
	const onSetNewApplicationEssentials = (essentials: number[]) =>
		dispatch(setNewApplicationEssentials(essentials));
	const onSetNewApplicationTitle = (title: string) => dispatch(setNewApplicationTitle(title));
	const onSetNewApplicationUrlId = (urlId: string) => dispatch(setNewApplicationUrlId(urlId));

	return {
		newApplication,
		onSetNewApplicationClubId,
		onSetNewApplicationEssentials,
		onSetNewApplicationTitle,
		onSetNewApplicationUrlId,
	};
}
