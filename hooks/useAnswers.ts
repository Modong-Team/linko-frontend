import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
	requestCreateAnswers,
	updateName,
	updateEssentialAnswer,
	updateQuestionAnswer,
} from '../modules/reply/answers';

export default function useAnswers() {
	const answers = useSelector(({ answers }: RootState) => answers);
	const dispatch = useDispatch();

	const onRequestCreateAnswers = (data: ResponseApplication.Get) =>
		dispatch(requestCreateAnswers(data));

	const onUpdateName = (name: string) => dispatch(updateName(name));

	const onUpdateEssentialAnswer = (essentialQuestionId: number, answer: string) =>
		dispatch(updateEssentialAnswer(essentialQuestionId, answer));

	const onUpdateQuestionAnswer = (questionId: number, answer: string) =>
		dispatch(updateQuestionAnswer(questionId, answer));

	return {
		answers,
		onRequestCreateAnswers,
		onUpdateName,
		onUpdateEssentialAnswer,
		onUpdateQuestionAnswer,
	};
}
