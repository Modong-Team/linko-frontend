import styled from 'styled-components';
import { FormTitleInput } from '../../inputs';
import { Fonts } from '../../../styles/fonts';
import QuestionBox from '../../boxes/QuestionBox';
import useForms from '../../../hooks/useForms';
import useFreshMiddleState from '../../../hooks/useFreshMiddleState';
import NewQuestionButton from '../../buttons/NewQuestionButton';
import { QuestionTypes } from '../../../constants/questionTypes';

export default function NewForms({ formIdx }: NewFormsProps) {
	const { forms, onCreateQuestion, onUpdateFormTitle } = useForms();
	const { value: title, onChange: onChangeTitle } = useFreshMiddleState(
		forms[formIdx].title,
		(title: string) => onUpdateFormTitle(formIdx, title),
	);

	return (
		<S.Container>
			<FormTitleInput value={title} onChange={onChangeTitle} />
			<h2>지원자에게 질문하고 싶은 내용을 입력하세요!</h2>
			<div>
				{forms.length &&
					forms[formIdx].questionRequests.map((question, i) => (
						<QuestionBox
							formIdx={formIdx}
							questionType={question.questionType}
							options={question.questionOptionRequest}
							questionIdx={i}
							key={i}
						/>
					))}
			</div>
			<NewQuestionButton
				onCreateTextQuestion={() => onCreateQuestion(formIdx, QuestionTypes.question)}
				onCreateSingleSelectQuestion={() =>
					onCreateQuestion(formIdx, QuestionTypes.singleSelectQuestion)
				}
				onCreateMultiSelectQuestion={() =>
					onCreateQuestion(formIdx, QuestionTypes.multiSelectQuestion)
				}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h2 {
			${Fonts.subtitle14medium}
			margin-top: 2.4rem;
			margin-bottom: 2rem;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	`;
}
