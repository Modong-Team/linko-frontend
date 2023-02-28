import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useApplication from '../../../hooks/useApplication';
import useAnswers from '../../../hooks/useAnswers';
import { EssentialCategories, Essentials } from '../../../constants/essentials';
import useUniqueId from '../../../hooks/useUniqueId';
import { Devices } from '../../../styles/devices';
import { useEffect, useRef } from 'react';

export default function ReplyEssentials({
	onAddError,
	onRemoveError,
	onSetErrors,
}: ReplyErrorProps) {
	const name = useUniqueId();
	const isMount = useRef(true);
	const { application } = useApplication();
	const { answers, onUpdateName, onUpdateEssentialAnswer } = useAnswers();

	const getDefault = () =>
		application?.data.essentialQuestions.filter((essential) =>
			EssentialCategories.default.includes(essential.id),
		);

	const getGender = () =>
		application?.data.essentialQuestions.filter((essential) =>
			EssentialCategories.gender.includes(essential.id),
		);

	const getBirth = () =>
		application?.data.essentialQuestions.filter((essential) =>
			EssentialCategories.birth.includes(essential.id),
		);

	const getAcademic = () =>
		application?.data.essentialQuestions.filter((essential) =>
			EssentialCategories.academic.includes(essential.id),
		);

	const getEssentialAnswer = (essentialQuestionId: number) =>
		answers.essentialAnswers.find(
			(essential) => essential.essentialQuestionId === essentialQuestionId,
		)?.answer;

	const onRequestUpdateName = (value: string) => {
		if (value === '') onAddError(Essentials.name);
		else onRemoveError(Essentials.name);
		onUpdateName(value);
		return true;
	};

	const onRequestUpdateEssentialAnswer = (id: number, value: string) => {
		if (!checkIfValid(id, value)) return;
		if (value === '') onAddError(id);
		else onRemoveError(id);
		onUpdateEssentialAnswer(id, value);
	};

	const checkIfValid = (id: number, value: string) => {
		if (id === Essentials.name) return validate(value.length <= 4);
		if (id === Essentials.phoneNumber)
			return validate(/^[0-9]*$/.test(value) && value.length <= 11);
		if (id === Essentials.birth) return validate(/^[0-9]*$/.test(value) && value.length <= 6);
		return true;
	};

	const validate = (validCondition: boolean) => {
		if (validCondition) return true;
		return false;
	};

	useEffect(() => {
		if (!answers.essentialAnswers.length) return;
		if (!isMount.current) return;
		const errors: number[] = [];
		answers.essentialAnswers.forEach((answer) => {
			if (answer.answer === '') errors.push(answer.essentialQuestionId);
		});
		onSetErrors([...errors]);
		isMount.current = false;
	}, [answers]);

	return (
		<S.Container>
			<h1>지원자 정보</h1>
			<div>
				<h2>기본정보</h2>
				{getDefault()?.map((question, i) => (
					<ReplyTextInput
						label={
							question.id === Essentials.phoneNumber
								? question.content + ' (숫자만 입력)'
								: question.content
						}
						value={getEssentialAnswer(question.id) || ''}
						onChange={(e) =>
							question.id === Essentials.name
								? onRequestUpdateName(e.target.value) &&
								  onRequestUpdateEssentialAnswer(question.id, e.target.value)
								: onRequestUpdateEssentialAnswer(question.id, e.target.value)
						}
						key={i}
						isSingleLine
					/>
				))}
			</div>
			{!!getGender()?.length && (
				<div>
					<h2>성별</h2>
					<ReplyRadioInput
						label={'남성'}
						name={name}
						isChecked={getEssentialAnswer(Essentials.gender) === '남성'}
						onChange={() => onRequestUpdateEssentialAnswer(Essentials.gender, '남성')}
					/>
					<ReplyRadioInput
						label={'여성'}
						name={name}
						isChecked={getEssentialAnswer(Essentials.gender) === '여성'}
						onChange={() => onRequestUpdateEssentialAnswer(Essentials.gender, '여성')}
					/>
				</div>
			)}
			{!!getBirth()?.length && (
				<div>
					<h2>생년월일</h2>
					{getBirth()?.map((question, i) => (
						<ReplyTextInput
							label={question.content + ' (YYMMDD)'}
							value={getEssentialAnswer(question.id) || ''}
							onChange={(e) => onRequestUpdateEssentialAnswer(question.id, e.target.value)}
							key={i}
							isSingleLine
						/>
					))}
				</div>
			)}
			{!!getAcademic()?.length && (
				<div>
					<h2>학적</h2>
					{getAcademic()?.map((question, i) => (
						<ReplyTextInput
							label={question.content}
							value={getEssentialAnswer(question.id) || ''}
							onChange={(e) => onRequestUpdateEssentialAnswer(question.id, e.target.value)}
							key={i}
							isSingleLine
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
