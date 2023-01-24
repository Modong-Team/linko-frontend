import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useApplication from '../../../hooks/useApplication';

export default function ReplyEssentials() {
	const { application } = useApplication();

	const getDefault = () =>
		application.data.essentialQuestions.filter((essential) => [1, 2, 3].includes(essential.id));

	const getGender = () =>
		application.data.essentialQuestions.filter((essential) => [4].includes(essential.id));

	const getBirth = () =>
		application.data.essentialQuestions.filter((essential) => [5].includes(essential.id));

	const getAcademic = () =>
		application.data.essentialQuestions.filter((essential) => [6, 7, 8].includes(essential.id));

	return (
		<S.Container>
			<h1>지원자 정보</h1>
			<div>
				<h2>기본정보</h2>
				{getDefault().map((question, i) => (
					<ReplyTextInput label={question.content} questionId={0} errorMessage={''} key={i} />
				))}
			</div>
			{!!getGender().length && (
				<div>
					<h2>성별</h2>
					<ReplyRadioInput
						label={'남성'}
						questionId={0}
						errorMessage={''}
						optionIdx={0}
						name={'gender'}
					/>
					<ReplyRadioInput
						label={'여성'}
						questionId={0}
						errorMessage={''}
						optionIdx={0}
						name={'gender'}
					/>
				</div>
			)}
			{!!getBirth().length && (
				<div>
					<h2>생년월일</h2>
					{getBirth().map((question, i) => (
						<ReplyTextInput label={question.content} questionId={0} errorMessage={''} key={i} />
					))}
				</div>
			)}
			{!!getAcademic().length && (
				<div>
					<h2>학적</h2>
					{getAcademic().map((question, i) => (
						<ReplyTextInput label={question.content} questionId={0} errorMessage={''} key={i} />
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
