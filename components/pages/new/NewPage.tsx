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
import {
	ApplicationTitleInput,
	EssentialCheckInput,
	FormTitleInput,
	QuestionTitleInput,
} from '../../inputs';
import useInput from '../../../hooks/useInput';
import styled from 'styled-components';
import NewIndicator from './NewIndicator';
import NewMain from './NewMain';
import NewNavigator from './NewNavigator';
import NewPageButtons from './NewPageButtons';
import { useState } from 'react';

export default function NewPage() {
	const dispatch = useDispatch();
	const onSetNewApplicationId = () => dispatch(requestSetNewApplicationId(777));
	const onRequestCreateForm = () => dispatch(requestCreateForm('제목냠냠'));
	const onRemoveForm = () => dispatch(removeForm(0));
	const onUpdateFormTitle = (title: string) => dispatch(updateFormTitle(0, title));
	const onCreateQuestion = () => dispatch(createQuestion(0, 3));
	const onRemoveQuestion = () => dispatch(removeQuestion(0, 0));
	const onUpdateQuestionTitle = () => dispatch(updateQuestionTitle(0, 0, '질문얍!'));
	const onCreateQuestionOption = () => dispatch(createQuestionOption(0, 0));
	const onUpdateQuestionOption = () => dispatch(updateQuestionOption(0, 0, 0, '옵션얍얍!'));
	const onRemoveQuestionOption = () => dispatch(removeQuestionOption(0, 0, 0));

	const { value: title, onChange: onChangeTitle } = useInput('??');

	const [page, setPage] = useState(-1);

	const onChangePage = (page: number) => setPage(page);
	const onPrevPage = () => setPage(page - 1);
	const onNextPage = () => setPage(page + 1);

	return (
		<S.Container>
			{/* <ApplicationTitleInput isError={false} value={title} onChange={onChangeTitle} />
			<FormTitleInput value={title} onChange={onChangeTitle} />
			<QuestionTitleInput value={title} onChange={onChangeTitle} />
			<EssentialCheckInput label='얍얍' />
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
			<button onClick={onRemoveQuestionOption}>onRemoveQuestionOption</button> */}
			<ApplicationTitleInput value={''} onChange={console.log} isError={false} />
			<NewIndicator page={page} />
			<NewMain page={page} />
			<NewNavigator />
			<NewPageButtons page={page} onPrevPage={onPrevPage} onNextPage={onNextPage} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: grid;
		grid-template-columns: 19.4rem 71.2rem 19.4rem;
		row-gap: 1.6rem;
		width: fit-content;
		margin: 0 auto;
		justify-content: center;
		padding-top: 4rem;

		> div:first-of-type,
		> div:last-of-type {
			grid-column: 2/3;
		}
	`;
}
