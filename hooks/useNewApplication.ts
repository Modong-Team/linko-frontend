import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import { setNewApplication } from '../modules/new/newApplication';
import {
	addNewApplicationEssential,
	NewApplicationStateType,
	removeNewApplicationEssential,
} from '../modules/new/newApplication';
import {
	setNewApplicationClubId,
	setNewApplicationTitle,
	setNewApplicationUrlId,
} from '../modules/new/newApplication';

export default function useNewApplication() {
	const newApplication = useSelector(({ newApplication }: RootState) => newApplication);
	const dispatch = useDispatch();

	const onSetNewApplicationClubId = (clubId: number) => dispatch(setNewApplicationClubId(clubId));

	const onAddNewApplicationEssentials = (essentialIdx: number) =>
		dispatch(addNewApplicationEssential(essentialIdx));

	const onRemoveNewApplicationEssentials = (essentialIdx: number) =>
		dispatch(removeNewApplicationEssential(essentialIdx));

	const onSetNewApplicationTitle = (title: string) => dispatch(setNewApplicationTitle(title));

	const onSetNewApplicationUrlId = (urlId: string) => dispatch(setNewApplicationUrlId(urlId));

	const onSetNewApplication = (application: NewApplicationStateType) =>
		dispatch(setNewApplication(application));

	return {
		newApplication,
		onSetNewApplicationClubId,
		onAddNewApplicationEssentials,
		onRemoveNewApplicationEssentials,
		onSetNewApplicationTitle,
		onSetNewApplicationUrlId,
		onSetNewApplication,
	};
}
