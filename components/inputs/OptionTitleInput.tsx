import styled from 'styled-components';
import QuestionTitleInput from './QuestionTitleInput';
import { svgRadioQuestion, svgCheckQuestion } from '../../styles/svgs';
import { QuestionTypes } from '../../constants/questionTypes';
import useForms from '../../hooks/useForms';

export default function OptionTitleInput({
	formIdx,
	questionIdx,
	optionIdx,
	questionType,
}: OptionTitleInputProps) {
	const { forms, onUpdateQuestionOption, onRemoveQuestionOption } = useForms();

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		onUpdateQuestionOption(formIdx, questionIdx, optionIdx, e.target.value);
	};

	return (
		<S.Container>
			{questionType === QuestionTypes.multiSelectQuestion && svgCheckQuestion}
			{questionType === QuestionTypes.singleSelectQuestion && svgRadioQuestion}
			<QuestionTitleInput
				value={forms[formIdx].questionRequests[questionIdx].questionOptionRequest[optionIdx]}
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
