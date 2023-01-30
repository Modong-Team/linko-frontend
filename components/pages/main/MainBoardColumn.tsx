import MainBoardCard from './MainBoardCard';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { Fonts } from '../../../styles/fonts';
import MainPageButtons from './MainPageButtons';
import useApplicants from '../../../hooks/useApplicants';
import { MainBoardColumnProps } from '../../../@types/client';
import { ApplicantStatusCodeLabel } from '../../../constants/applicantStatusCode';
import { useState, useEffect } from 'react';
import useSelectedStatus from '../../../hooks/useSelectedStatus';
import DropDown from '../../dropdowns/DropDown';
import { DynamicStyles, Styles } from '../../../styles/styles';

export default function MainBoardColumn({ applicantStatusCode }: MainBoardColumnProps) {
	const { applicants } = useApplicants();
	const [applicantsWithCertainStatusCode, setApplicantsWithCertainStatusCode] =
		useState<ResponseApplicants.Data[]>();
	const { selectedStatus, onSelectStatus, onRequestResetStatus } = useSelectedStatus();

	const pickApplicantsByStatusCode = () => {
		const result = applicants?.data.filter((applicant) => applicant.status === applicantStatusCode);
		setApplicantsWithCertainStatusCode(result);
	};

	const checkShouldShowButton = () => {
		if (!selectedStatus) return true;
		return selectedStatus === applicantStatusCode;
	};

	const checkIsSelected = () => selectedStatus === applicantStatusCode;

	useEffect(() => {
		if (applicantStatusCode) pickApplicantsByStatusCode();
	}, [applicants]);

	return (
		<S.Container isSelected={checkIsSelected()}>
			<S.Meta>
				<h2>{ApplicantStatusCodeLabel[applicantStatusCode]}</h2>
				<div>{applicantsWithCertainStatusCode?.length}</div>
				{checkShouldShowButton() && (
					<CustomButton
						label={!checkIsSelected() ? '상태 변경' : '선택 취소'}
						onClick={
							!checkIsSelected() ? () => onSelectStatus(applicantStatusCode) : onRequestResetStatus
						}
						buttonType={ButtonTypes.line}
						buttonSize={ButtonSizes.small}>
						<DropDown
							option1={'다음 단계로'}
							option2={'탈락'}
							onClick1={console.log}
							onClick2={console.log}
							isHidden={!checkIsSelected()}
							customCSS={
								Styles.dropDownTextAlignLeft +
								DynamicStyles.dropDownNthOptionRed(2) +
								DynamicStyles.dropDownTranslate(105, 1)
							}
						/>
					</CustomButton>
				)}
			</S.Meta>
			<S.Applicants>
				{applicantsWithCertainStatusCode?.slice(0, 6).map((applicant, i) => (
					<MainBoardCard
						id={applicant.id}
						name={applicant.name}
						rate={applicant.rate}
						submitDate={applicant.submitDate}
						fail={applicant.fail}
						isSelected={checkIsSelected()}
						key={i}
					/>
				))}
			</S.Applicants>
			<MainPageButtons />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsSelectedType>`
		background-color: ${(props) => (props.isSelected ? Colors.blue50 : Colors.background)};
		transition: 0.3s ease;
		border-radius: 0.8rem;
		padding: 0 0.4rem;
		display: flex;
		flex-direction: column;
	`;

	export const Meta = styled.div`
		flex-shrink: 0;
		height: 5.6rem;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 1.2rem;

		> h2 {
			${Fonts.subtitle16semibold}
		}

		> div {
			${Fonts.subtitle16semibold}
			color: ${Colors.blue500};
		}

		> button {
			margin-left: auto;
		}
	`;

	export const Applicants = styled.div`
		height: 100%;
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		gap: 0.4rem;
	`;
}
