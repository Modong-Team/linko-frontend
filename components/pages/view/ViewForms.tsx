import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { SC } from '../../../styles/styled';
import useApplication from '../../../hooks/useApplication';
import useApplicant from '../../../hooks/useApplicant';
import parseMultiOptionAnswers from '../../../utils/parseMultiOptionAnswers';

export default function ViewForms({ page }: ViewFormsProps) {
	const { applicant } = useApplicant();
	const { application } = useApplication();

	const getAnswerByQuestionId = (questionId: number) => {
		if (!applicant?.data.questionAnswers.length) return;
		for (const questionAnswer of applicant?.data.questionAnswers) {
			if (+questionAnswer.id === questionId) return questionAnswer.answer;
		}
	};

	return (
		<S.Container>
			<h2>{application?.data.forms[page - 1]?.title}</h2>
			{application?.data.forms[page - 1]?.questions.map((question, i) => (
				<div key={i}>
					<h3>{question.content}</h3>
					<p>{parseMultiOptionAnswers(getAnswerByQuestionId(question.id) + '')}</p>
				</div>
			))}
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		display: flex;
		flex-direction: column;
		gap: 3.2rem;

		> h2 {
			${Fonts.heading24bold}
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;

			> h3 {
				${Fonts.heading18bold}
			}

			> p {
				${Fonts.body14regular}
			}
		}
	`;
}
