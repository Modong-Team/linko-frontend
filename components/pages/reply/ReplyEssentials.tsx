import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useApplication from '../../../hooks/useApplication';
import useAnswers from '../../../hooks/useAnswers';
import { EssentialCategories, Essentials } from '../../../constants/essentials';
import useUniqueId from '../../../hooks/useUniqueId';

export default function ReplyEssentials() {
	const name = useUniqueId();
	const { application } = useApplication();
	const { answers, onUpdateName, onUpdateEssentialAnswer } = useAnswers();

	const getDefault = () =>
		application.data.essentialQuestions.filter((essential) =>
			EssentialCategories.default.includes(essential.id),
		);

	const getGender = () =>
		application.data.essentialQuestions.filter((essential) =>
			EssentialCategories.gender.includes(essential.id),
		);

	const getBirth = () =>
		application.data.essentialQuestions.filter((essential) =>
			EssentialCategories.birth.includes(essential.id),
		);

	const getAcademic = () =>
		application.data.essentialQuestions.filter((essential) =>
			EssentialCategories.academic.includes(essential.id),
		);

	const getEssentialAnswer = (essentialQuestionId: number) =>
		answers.essentialAnswers.find(
			(essential) => essential.essentialQuestionId === essentialQuestionId,
		)?.answer;

	return (
		<S.Container>
			<h1>지원자 정보</h1>
			<div>
				<h2>기본정보</h2>
				{getDefault().map((question, i) => (
					<ReplyTextInput
						label={question.content}
						errorMessage={''}
						value={getEssentialAnswer(question.id) || ''}
						onChange={(e) =>
							question.id === Essentials.name
								? onUpdateName(e.target.value) &&
								  onUpdateEssentialAnswer(question.id, e.target.value)
								: onUpdateEssentialAnswer(question.id, e.target.value)
						}
						key={i}
					/>
				))}
			</div>
			{!!getGender().length && (
				<div>
					<h2>성별</h2>
					<ReplyRadioInput
						label={'남성'}
						errorMessage={''}
						name={name}
						isChecked={getEssentialAnswer(Essentials.gender) === '남성'}
						onChange={() => onUpdateEssentialAnswer(Essentials.gender, '남성')}
					/>
					<ReplyRadioInput
						label={'여성'}
						errorMessage={''}
						name={name}
						isChecked={getEssentialAnswer(Essentials.gender) === '여성'}
						onChange={() => onUpdateEssentialAnswer(Essentials.gender, '여성')}
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
