import styled from 'styled-components';
import QuestionTitleInput from './QuestionTitleInput';
import { svgRadioQuestion, svgCheckQuestion } from '../../styles/svgs';
import { QuestionTypes } from '../../constants/questionTypes';
import useFreshMiddleState from '../../hooks/useFreshMiddleState';
import useForms from '../../hooks/useForms';

export default function OptionTitleInput({
	formIdx,
	questionIdx,
	optionIdx,
	questionType,
}: OptionTitleInputProps) {
	const { forms, onUpdateQuestionOption, onRemoveQuestionOption } = useForms();
	const { value: title, onChange: onChangeTitle } = useFreshMiddleState(
		forms[formIdx].questionRequests[questionIdx].questionOptionRequest[optionIdx],
		(title: string) => onUpdateQuestionOption(formIdx, questionIdx, optionIdx, title),
	);

	return (
		<S.Container>
			{questionType === QuestionTypes.multiSelectQuestion && svgCheckQuestion}
			{questionType === QuestionTypes.singleSelectQuestion && svgRadioQuestion}
			<QuestionTitleInput
				value={title}
				onChange={onChangeTitle}
				onClickRemove={() => onRemoveQuestionOption(formIdx, questionIdx, optionIdx)}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		align-items: center;
		gap: 1.1rem;
	`;
}
