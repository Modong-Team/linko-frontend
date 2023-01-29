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

export default function MainBoardColumn({ applicantStatusCode }: MainBoardColumnProps) {
	const { applicants } = useApplicants();
	const [applicantsWithCertainStatusCode, setApplicantsWithCertainStatusCode] =
		useState<ResponseApplicants.Data[]>();

	const pickApplicantsByStatusCode = () => {
		const result = applicants?.data.filter((applicant) => applicant.status === applicantStatusCode);
		setApplicantsWithCertainStatusCode(result);
	};

	useEffect(() => {
		if (applicantStatusCode) pickApplicantsByStatusCode();
	}, [applicants]);

	return (
		<S.Container>
			<S.Meta>
				<h2>{ApplicantStatusCodeLabel[applicantStatusCode]}</h2>
				<div>8</div>
				<CustomButton
					label={'상태 변경'}
					onClick={() => alert('미구현')}
					buttonType={ButtonTypes.line}
					buttonSize={ButtonSizes.small}
				/>
			</S.Meta>
			<S.Applicants>
				{applicantsWithCertainStatusCode?.slice(0, 6).map((applicant, i) => (
					<MainBoardCard
						id={applicant.id}
						name={applicant.name}
						rate={applicant.rate}
						submitDate={applicant.submitDate}
						fail={applicant.fail}
						key={i}
					/>
				))}
			</S.Applicants>
			<MainPageButtons />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		background-color: ${Colors.background};
		border-radius: 0.8rem;
		padding: 0 0.4rem;
		display: flex;
		flex-direction: column;
	`;

	export const Meta = styled.div`
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
