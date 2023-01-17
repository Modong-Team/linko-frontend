import { useDispatch } from 'react-redux';
import { requestSetNewApplicationId } from '../../../modules/newApplicationId';
import { removeQuestionOption, requestCreateForm } from '../../../modules/forms';
import {
	updateQuestionTitle,
	createQuestionOption,
	updateQuestionOption,
} from '../../../modules/forms';
import {
	removeForm,
	updateFormTitle,
	createQuestion,
	removeQuestion,
} from '../../../modules/forms';

export default function NewPage() {
	const dispatch = useDispatch();
	const onSetNewApplicationId = () => dispatch(requestSetNewApplicationId(777));
	const onRequestCreateForm = () => dispatch(requestCreateForm('제목냠냠'));
	const onRemoveForm = () => dispatch(removeForm(0));
	const onUpdateFormTitle = () => dispatch(updateFormTitle(0, '첫번째폼'));
	const onCreateQuestion = () => dispatch(createQuestion(0, 3));
	const onRemoveQuestion = () => dispatch(removeQuestion(0, 0));
	const onUpdateQuestionTitle = () => dispatch(updateQuestionTitle(0, 0, '질문얍!'));
	const onCreateQuestionOption = () => dispatch(createQuestionOption(0, 0));
	const onUpdateQuestionOption = () => dispatch(updateQuestionOption(0, 0, 0, '옵션얍얍!'));
	const onRemoveQuestionOption = () => dispatch(removeQuestionOption(0, 0, 0));

	return (
		<>
			<button onClick={onSetNewApplicationId}>onSetNewApplicationId</button>
			<br />
			<button onClick={onRequestCreateForm}>onRequestCreateForm</button>
			<br />
			<button onClick={onRemoveForm}>onRemoveForm</button>
			<br />
			<button onClick={onUpdateFormTitle}>onUpdateFormTitle</button>
			<br />
			<button onClick={onCreateQuestion}>onCreateQuestion</button>
			<br />
			<button onClick={onRemoveQuestion}>onRemoveQuestion</button>
			<br />
			<button onClick={onUpdateQuestionTitle}>onUpdateQuestionTitle</button>
			<br />
			<button onClick={onCreateQuestionOption}>onCreateQuestionOption</button>
			<br />
			<button onClick={onUpdateQuestionOption}>onUpdateQuestionOption</button>
			<br />
			<button onClick={onRemoveQuestionOption}>onRemoveQuestionOption</button>
		</>
	);
}
