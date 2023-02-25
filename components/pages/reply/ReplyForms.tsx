import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyCheckInput from '../../inputs/ReplyCheckInput';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useApplication from '../../../hooks/useApplication';
import { QuestionTypes } from '../../../constants/questionTypes';
import useAnswers from '../../../hooks/useAnswers';
import toggleMultiAnswer from '../../../utils/toggleMultiAnswer';
import isMultiChecked from '../../../utils/isMultiChecked';
import { Devices } from '../../../styles/devices';
import { useEffect } from 'react';

export default function ReplyForms({
	formIdx,
	onAddError,
	onRemoveError,
	onSetErrors,
}: NewFormsProps & ReplyErrorProps) {
	const { answers, onUpdateQuestionAnswer } = useAnswers();
	const { application } = useApplication();

	const getQuestionAnswer = (questionId: number) =>
		answers.questionAnswers.find((essential) => essential.questionId === questionId)?.answer || '';

	const onRequestUpdateQuestionAnswer = (id: number, value: string) => {
		if (value === '') onAddError(id);
		else onRemoveError(id);
		onUpdateQuestionAnswer(id, value);
	};

	useEffect(() => {
		const errors: number[] = [];
		application?.data.forms[formIdx].questions.forEach((question) => {
			if (
				question.questionType !== QuestionTypes.multiSelectQuestion &&
				answers.questionAnswers[formIdx].answer === ''
			)
				errors.push(question.id);
		});
		onSetErrors([...errors]);
	}, [formIdx]);

	return (
		<S.Container>
			<h1>{application?.data.forms[formIdx].title}</h1>
			{application?.data.forms[formIdx].questions.map((question, i) => (
				<div key={i}>
					<h2>{question.content}</h2>
					{question.questionType === QuestionTypes.question && (
						<ReplyTextInput
							label={'답변'}
							isError={getQuestionAnswer(question.id) === ''}
							value={getQuestionAnswer(question.id)}
							onChange={(e) => onRequestUpdateQuestionAnswer(question.id, e.target.value)}
							key={i}
						/>
					)}
					{question.questionType === QuestionTypes.singleSelectQuestion &&
						question.options.map((option, i) => (
							<ReplyRadioInput
								label={option}
								name={question.id + ''}
								isChecked={getQuestionAnswer(question.id) === option}
								onChange={() => onRequestUpdateQuestionAnswer(question.id, option)}
								key={i}
							/>
						))}
					{question.questionType === QuestionTypes.multiSelectQuestion &&
						question.options.map((option, i) => (
							<ReplyCheckInput
								label={option}
								isChecked={isMultiChecked(getQuestionAnswer(question.id), option)}
								onChange={(e) =>
									onUpdateQuestionAnswer(
										question.id,
										toggleMultiAnswer(getQuestionAnswer(question.id), option, e.target.checked),
									)
								}
								key={i}
							/>
						))}
				</div>
			))}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h1 {
			${Fonts.heading24bold}
			margin-bottom: 3.2rem;

			@media ${Devices.mobile} {
				${Fonts.heading20bold}
				margin-bottom: 2.4rem;
			}
		}

		> div > h2 {
			${Fonts.heading20bold}
			margin-bottom: 1.5rem;

			@media ${Devices.mobile} {
				${Fonts.heading18bold}
				margin-bottom: 2.3rem;
			}
		}

		> div:not(:last-of-type) {
			margin-bottom: 4rem;
		}

		> div:last-of-type > div:last-of-type {
			margin-bottom: 0 !important;
		}
	`;
}
