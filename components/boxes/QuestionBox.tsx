import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { QuestionTitleInput } from '../inputs';
import OptionTitleInput from '../inputs/OptionTitleInput';
import { QuestionTypes, QuestionLabels } from '../../constants/questionTypes';
import useForms from '../../hooks/useForms';
import NewOptionButton from '../buttons/NewOptionButton';

export default function QuestionBox({
	formIdx,
	questionIdx,
	options,
	questionType,
}: QuestionBoxProps) {
	const { forms, onUpdateQuestionTitle, onCreateQuestionOption, onRemoveQuestion } = useForms();

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		onUpdateQuestionTitle(formIdx, questionIdx, e.target.value);
	};

	return (
		<S.Container>
			<S.Wrapper>
				<h3>{QuestionLabels[questionType]}</h3>
				<div>
					<QuestionTitleInput
						value={forms[formIdx].questionRequests[questionIdx].content}
						onChange={onChangeTitle}
						onClickRemove={() => onRemoveQuestion(formIdx, questionIdx)}
						placeHolder={'질문을 입력하세요.'}
					/>
				</div>
			</S.Wrapper>
			{questionType !== QuestionTypes.question && (
				<S.Wrapper>
					<h3>선택항목</h3>
					<div>
						{options?.map((option, i) => (
							<OptionTitleInput
								formIdx={formIdx}
								questionIdx={questionIdx}
								optionIdx={i}
								questionType={questionType}
								key={i}
							/>
						))}
						<NewOptionButton onClick={() => onCreateQuestionOption(formIdx, questionIdx)} />
					</div>
				</S.Wrapper>
			)}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		padding: 2.3rem 2.8rem;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 1.9rem;
	`;

	export const Wrapper = styled.div`
		> h3 {
			${Fonts.subtitle14semibold}
			margin-bottom: 0.9rem;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> button:last-of-type {
				margin-left: 3rem;
			}
		}
	`;
}
