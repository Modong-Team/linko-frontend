import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import FilterButton from '../../buttons/FilterButton';
import { svgMail, svgPhone, svgGender, svgBirth, svgAcademic } from '../../../styles/svgs';
import { AlphaToHex } from '../../../styles/alphaToHex';
import useApplicant from '../../../hooks/useApplicant';
import {
	ApplicantStatusCode,
	ApplicantStatusCodeLabel,
} from '../../../constants/applicantStatusCode';
import useApplication from '../../../hooks/useApplication';
import { EssentialCategories, EssentialIds } from '../../../constants/essentials';
import parsePhoneNumber from '../../../utils/parsePhoneNumber';
import { patchApplicantCancelFail, patchApplicantStatus } from '../../../api/applicant';
import useApplicantId from '../../../hooks/useApplicantId';
import useTriggers from '../../../hooks/useTriggers';

export default function ViewSidebar({ page, onChangePage }: ViewSidebarProps) {
	const { applicant } = useApplicant();
	const { applicantId } = useApplicantId();
	const { application } = useApplication();
	const { onTriggerRefreshApplicant } = useTriggers();

	const getCurrentLabel = () => {
		if (applicant?.data.fail) return ApplicantStatusCodeLabel.FAIL;
		const statusCode: keyof typeof ApplicantStatusCodeLabel = applicant?.data.status as any;
		if (statusCode) return ApplicantStatusCodeLabel[statusCode];
	};

	const getEssentialId = (essential: ResponseApplicant.EssentialAnswer) => {
		const essentialQuestion = essential.essentialQuestion as keyof typeof EssentialIds;
		const essentialId = EssentialIds[essentialQuestion];
		return essentialId;
	};

	const getEmail = () => {
		return applicant?.data.essentialAnswers.find((essential) => {
			const essentialId = getEssentialId(essential);
			return EssentialCategories.email.includes(essentialId);
		});
	};

	const getPhone = () => {
		return applicant?.data.essentialAnswers.find((essential) => {
			const essentialId = getEssentialId(essential);
			return EssentialCategories.phone.includes(essentialId);
		});
	};

	const getGender = () => {
		return applicant?.data.essentialAnswers.find((essential) => {
			const essentialId = getEssentialId(essential);
			return EssentialCategories.gender.includes(essentialId);
		});
	};

	const getBirth = () => {
		return applicant?.data.essentialAnswers.find((essential) => {
			const essentialId = getEssentialId(essential);
			return EssentialCategories.birth.includes(essentialId);
		});
	};

	const getAcademic = () => {
		return applicant?.data.essentialAnswers.filter((essential) => {
			const essentialId = getEssentialId(essential);
			return EssentialCategories.academic.includes(essentialId);
		});
	};

	const onChangeApplicantStatus = async (
		applicantStatusCode: ValueOf<typeof ApplicantStatusCode>,
	) => {
		if (!applicantId) return;
		if (applicant?.data.fail) await patchApplicantCancelFail(applicantId);
		await patchApplicantStatus(applicantId, { applicantStatusCode });
		onTriggerRefreshApplicant();
	};

	return (
		<S.Container>
			<S.Meta>
				<h1>
					{applicant?.data.name}
					<FilterButton
						label1={'지원 접수'}
						onClick1={() => onChangeApplicantStatus(ApplicantStatusCode.ACCEPT)}
						label2={'서류 전형'}
						onClick2={() => onChangeApplicantStatus(ApplicantStatusCode.APPLICATION)}
						label3={'면접 전형'}
						onClick3={() => onChangeApplicantStatus(ApplicantStatusCode.INTERVIEW)}
						label4={'최종 합격'}
						onClick4={() => onChangeApplicantStatus(ApplicantStatusCode.SUCCESS)}
						label5={'탈락'}
						onClick5={() => onChangeApplicantStatus(ApplicantStatusCode.FAIL)}
						currentLabel={getCurrentLabel() + ''}
					/>
				</h1>
				<div>
					{getEmail() && (
						<p>
							{svgMail}
							{getEmail()?.essentialAnswer}
						</p>
					)}
					{getPhone() && (
						<p>
							{svgPhone}
							{parsePhoneNumber(getPhone()?.essentialAnswer + '')}
						</p>
					)}
					{getGender() && (
						<p>
							{svgGender}
							{getGender()?.essentialAnswer}
						</p>
					)}
					{getBirth() && (
						<p>
							{svgBirth}
							{getBirth()?.essentialAnswer}
						</p>
					)}
					{!!getAcademic()?.length && (
						<p>
							{svgAcademic}
							{getAcademic()?.reduce((acc, cur) => acc + cur.essentialAnswer + '\n', '')}
						</p>
					)}
				</div>
			</S.Meta>
			<S.FormTitles>
				<h1>지원 서류</h1>
				<div>
					{application?.data.forms.map((form, i) => (
						<S.FormTitle isFocus={page === i + 1} onClick={() => onChangePage(i + 1)} key={i}>
							{form.title}
						</S.FormTitle>
					))}
				</div>
			</S.FormTitles>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.aside`
		background-color: ${Colors.white};
		border-right: 0.1rem solid ${Colors.gray200};
	`;

	export const Meta = styled.div`
		padding: 1.8rem 2.4rem;
		padding-bottom: 2.4rem;
		border-bottom: 0.1rem solid ${Colors.gray200};

		> h1 {
			${Fonts.heading26bold}
			margin-bottom: 3.3rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 1.6rem;

			> p {
				${Fonts.subtitle14medium}
				display: flex;
				align-items: flex-start;
				gap: 1.1rem;
				white-space: pre-wrap;

				> svg {
					position: relative;
					top: 0.05rem;
				}
			}
		}
	`;

	export const FormTitles = styled.div`
		padding: 2.4rem 1.2rem;

		> h1 {
			${Fonts.heading18bold}
			margin-bottom: 0.8rem;
			padding: 0 1.2rem;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
		}
	`;

	export const FormTitle = styled.button<IsFocusType>`
		${Fonts.subtitle16semibold}
		height: 4.8rem;
		padding: 1.2rem;
		display: flex;
		align-items: center;
		border-radius: 0.8rem;
		background-color: ${(props) =>
			props.isFocus ? Colors.blue500 + AlphaToHex[0.2] : Colors.white};
		color: ${(props) => (props.isFocus ? Colors.gray990 : Colors.gray700)};
		transition: 0.3s ease;
	`;
}
