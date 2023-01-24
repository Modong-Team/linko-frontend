import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useApplication from '../../../hooks/useApplication';
import useAnswers from '../../../hooks/useAnswers';

export default function ReplyEssentials() {
	const { application } = useApplication();
	const { answers, onUpdateName, onUpdateEssentialAnswer } = useAnswers();

	const getDefault = () =>
		application.data.essentialQuestions.filter((essential) => [1, 2, 3].includes(essential.id));

	const getGender = () =>
		application.data.essentialQuestions.filter((essential) => [4].includes(essential.id));

	const getBirth = () =>
		application.data.essentialQuestions.filter((essential) => [5].includes(essential.id));

	const getAcademic = () =>
		application.data.essentialQuestions.filter((essential) => [6, 7, 8].includes(essential.id));

	const getEssentialAnswer = (essentialQuestionId: number) =>
		answers.essentialAnswers.find(
			(essential) => essential.essentialQuestionId === essentialQuestionId,
		)?.answer;

	return (
		<S.Container>
			<h1>지원자 정보</h1>
			<div>
				<h2>기본정보</h2>
				<ReplyTextInput
					label={getDefault()[0]?.content}
					errorMessage={''}
					value={answers.name}
					onChange={(e) =>
						onUpdateName(e.target.value) && onUpdateEssentialAnswer(1, e.target.value)
					}
				/>
				<ReplyTextInput
					label={getDefault()[1]?.content}
					errorMessage={''}
					value={getEssentialAnswer(2) || ''}
					onChange={(e) => onUpdateEssentialAnswer(2, e.target.value)}
				/>
				<ReplyTextInput
					label={getDefault()[2]?.content}
					errorMessage={''}
					value={getEssentialAnswer(3) || ''}
					onChange={(e) => onUpdateEssentialAnswer(3, e.target.value)}
				/>
			</div>
			{!!getGender().length && (
				<div>
					<h2>성별</h2>
					<ReplyRadioInput
						label={'남성'}
						errorMessage={''}
						name={'gender'}
						onChange={() => onUpdateEssentialAnswer(4, '남성')}
					/>
					<ReplyRadioInput
						label={'여성'}
						errorMessage={''}
						name={'gender'}
						onChange={() => onUpdateEssentialAnswer(4, '여성')}
					/>
				</div>
			)}
			{!!getBirth().length && (
				<div>
					<h2>생년월일</h2>
					{getBirth().map((question, i) => (
						<ReplyTextInput
							label={question.content}
							errorMessage={''}
							value={getEssentialAnswer(question.id) || ''}
							onChange={(e) => onUpdateEssentialAnswer(question.id, e.target.value)}
							key={i}
						/>
					))}
				</div>
			)}
			{!!getAcademic().length && (
				<div>
					<h2>학적</h2>
					{getAcademic().map((question, i) => (
						<ReplyTextInput
							label={question.content}
							errorMessage={''}
							value={getEssentialAnswer(question.id) || ''}
							onChange={(e) => onUpdateEssentialAnswer(question.id, e.target.value)}
							key={i}
						/>
					))}
				</div>
			)}
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
