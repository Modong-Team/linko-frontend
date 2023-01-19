import { useSelector, useDispatch } from 'react-redux';
import {
	requestCreateForm,
	removeForm,
	updateFormTitle,
	createQuestion,
	removeQuestion,
	updateQuestionTitle,
	createQuestionOption,
	updateQuestionOption,
	removeQuestionOption,
	saveFormDataId,
} from '../modules/forms';
import { RootState } from '../modules/index';
import { requestSetNewApplicationId } from '../modules/newApplicationId';

export default function useForms() {
	const forms = useSelector(({ forms }: RootState) => forms);
	const dispatch = useDispatch();

	const onSetNewApplicationId = (applicationId: number) =>
		dispatch(requestSetNewApplicationId(applicationId));

	const onRequestCreateForm = () => dispatch(requestCreateForm('질문 페이지'));

	const onRemoveForm = (formIdx: number) => dispatch(removeForm(formIdx));

	const onUpdateFormTitle = (formIdx: number, title: string) =>
		dispatch(updateFormTitle(formIdx, title));

	const onCreateQuestion = (formIdx: number, questionType: 1 | 2 | 3) =>
		dispatch(createQuestion(formIdx, questionType));

	const onRemoveQuestion = (formIdx: number, questionIdx: number) =>
		dispatch(removeQuestion(formIdx, questionIdx));

	const onUpdateQuestionTitle = (formIdx: number, questionIdx: number, title: string) =>
		dispatch(updateQuestionTitle(formIdx, questionIdx, title));

	const onCreateQuestionOption = (formIdx: number, questionIdx: number) =>
		dispatch(createQuestionOption(formIdx, questionIdx));

	const onUpdateQuestionOption = (
		formIdx: number,
		questionIdx: number,
		optionIdx: number,
		title: string,
	) => dispatch(updateQuestionOption(formIdx, questionIdx, optionIdx, title));

	const onRemoveQuestionOption = (formIdx: number, questionIdx: number, optionIdx: number) =>
		dispatch(removeQuestionOption(formIdx, questionIdx, optionIdx));

	const onSaveFormDataId = (formIdx: number, dataId: number) =>
		dispatch(saveFormDataId(formIdx, dataId));

	return {
		forms,
		onSetNewApplicationId,
		onRequestCreateForm,
		onRemoveForm,
		onUpdateFormTitle,
		onCreateQuestion,
		onRemoveQuestion,
		onUpdateQuestionTitle,
		onCreateQuestionOption,
		onUpdateQuestionOption,
		onRemoveQuestionOption,
		onSaveFormDataId,
	};
}
