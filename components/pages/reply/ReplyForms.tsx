import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyCheckInput from '../../inputs/ReplyCheckInput';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useApplication from '../../../hooks/useApplication';
import { QuestionTypes } from '../../../constants/questionTypes';

export default function ReplyForms({ formIdx }: NewFormsProps) {
	const { application } = useApplication();

	return (
		<S.Container>
			<h1>{application.data.forms[formIdx].title}</h1>
			{application.data.forms[formIdx].questions.map((question, i) => (
				<div key={i}>
					<h2>{question.content}</h2>
					{question.questionType === QuestionTypes.question && (
						<ReplyTextInput
							label={'답변'}
							errorMessage={''}
							key={i}
							value={''}
							onChange={console.log}
						/>
					)}
					{question.questionType === QuestionTypes.singleSelectQuestion &&
						question.options.map((option, i) => (
							<ReplyRadioInput
								label={option}
								errorMessage={''}
								key={i}
								name={question.id + ''}
								onChange={console.log}
							/>
						))}
					{question.questionType === QuestionTypes.multiSelectQuestion &&
						question.options.map((option, i) => (
							<ReplyCheckInput label={option} errorMessage={''} key={i} onChange={console.log} />
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
		}

		> div > h2 {
			${Fonts.heading20bold}
			margin-bottom: 1.5rem;
		}

		> div:not(:last-of-type) {
			margin-bottom: 4rem;
		}
	`;
}
