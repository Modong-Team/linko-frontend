import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import FilterButton from '../../buttons/FilterButton';
import { svgMail, svgPhone, svgGender, svgBirth, svgAcademic } from '../../../styles/svgs';
import { AlphaToHex } from '../../../styles/alphaToHex';
import useApplicant from '../../../hooks/useApplicant';
import { ApplicantStatusCodeLabel } from '../../../constants/applicantStatusCode';
import useApplication from '../../../hooks/useApplication';

export default function ViewSidebar({ page, onChangePage }: ViewSidebarProps) {
	const { applicant } = useApplicant();
	const { application } = useApplication();

	const getCurrentLabel = () => {
		const statusCode: keyof typeof ApplicantStatusCodeLabel = applicant?.data.status as any;
		if (statusCode) return ApplicantStatusCodeLabel[statusCode];
	};

	return (
		<S.Container>
			<S.Meta>
				<h1>
					{applicant?.data.name}
					<FilterButton
						label1={'지원 접수'}
						onClick1={() => alert('미구현')}
						label2={'서류 전형'}
						onClick2={() => alert('미구현')}
						label3={'면접 전형'}
						onClick3={() => alert('미구현')}
						label4={'최종 합격'}
						onClick4={() => alert('미구현')}
						label5={'탈락'}
						onClick5={() => alert('미구현')}
						currentLabel={getCurrentLabel() + ''}
					/>
				</h1>
				<div>
					<p>{svgMail}linko@ac.kr</p>
					<p>{svgPhone}010-1111-2222</p>
					<p>{svgGender}여자</p>
					<p>{svgBirth}1998. 02. 20</p>
					<p>
						{svgAcademic}연세대학교
						<br />
						경영학과
						<br />
						2017123077
					</p>
				</div>
			</S.Meta>
			<S.FormTitles>
				<h1>지원 서류</h1>
				<div>
					{application.data.forms.map((form, i) => (
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
