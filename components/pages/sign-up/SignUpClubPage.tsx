import CustomButton from '../../buttons/CustomButton';
import ClubLogoPreview from './ClubLogoPreview';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import styled from 'styled-components';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useInput from '../../../hooks/useInput';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import SignUpModal from '../../modals/SignUpModal';
import useActive from '../../../hooks/useActive';

export default function SignUpClubPage() {
	const { value, onChange } = useInput();
	const { isActive, onActivate, onDeactivate } = useActive();

	return (
		<S.Container>
			<h2>동아리 로고</h2>
			<div>
				<ClubLogoPreview />
				<CustomButton
					label={'이미지 선택'}
					onClick={console.log}
					buttonType={ButtonTypes.secondary}
					buttonSize={ButtonSizes.medium}
				/>
			</div>
			<ReplyTextInput value={value} onChange={onChange} label={'동아리 이름'} errorMessage={''} />
			<p>
				동아리 로고와 동아리 이름은 추후에 수정하실 수 없으니
				<br />
				신중하게 입력해주세요!
			</p>
			<CustomButton
				label={'확인'}
				onClick={onActivate}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
				disabled={value === ''}
			/>
			<SignUpModal
				title={value}
				description={'동아리 이름은 수정이 불가능해요.'}
				onCancel={onDeactivate}
				onConfirm={console.log}
				isHidden={!isActive}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h2 {
			${Fonts.subtitle16medium}
			color: ${Colors.gray700};
			margin-bottom: 1.6rem;
		}

		> div:first-of-type {
			display: flex;
			gap: 1.6rem;
			margin-bottom: 5.5rem;
			display: flex;
			align-items: center;
		}

		> div:nth-of-type(2) {
			margin: 0;
		}

		> p {
			${Fonts.subtitle14medium}
			color: ${Colors.gray700};
			margin: 3.2rem 0;
			text-align: center;
		}

		> button {
			width: 100%;
		}
	`;
}
