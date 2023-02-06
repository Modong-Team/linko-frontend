import styled from 'styled-components';
import CustomButton from '../../buttons/CustomButton';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import useInput from '../../../hooks/useInput';
import { Devices } from '../../../styles/devices';

export default function RegisterMemberPage({ clubId }: RegisterMemberPageProps) {
	const [id, onChangeId] = useInput();
	const [password, onChangePassword] = useInput();
	const [passwordForCheck, onChangePasswordForCheck] = useInput();
	const [name, onChangeName] = useInput();
	const [email, onChangeEmail] = useInput();
	const [phone, onChangePhone] = useInput();

	return (
		<S.Container>
			<ReplyTextInput
				value={id}
				onChange={onChangeId}
				label={'아이디 (3~20자)'}
				errorMessage={'아이디를 제대로 입력하셈'}
				minLength={3}
				maxLength={20}
				pattern={'^[a-zA-Z0-9]*$'}
				isSingleLine
			/>
			<ReplyTextInput
				value={password}
				onChange={onChangePassword}
				label={'비밀번호 (숫자, 영문, 특수문자 조합 6~20자)'}
				errorMessage={''}
				minLength={6}
				maxLength={20}
				type={'password'}
				isSingleLine
			/>
			<ReplyTextInput
				value={passwordForCheck}
				onChange={onChangePasswordForCheck}
				label={'비밀번호 확인'}
				errorMessage={''}
				minLength={6}
				maxLength={20}
				type={'password'}
				isSingleLine
			/>
			<ReplyTextInput
				value={name}
				onChange={onChangeName}
				label={'사용자 이름'}
				errorMessage={''}
				isSingleLine
			/>
			<ReplyTextInput //
				value={email}
				onChange={onChangeEmail}
				label={'이메일'}
				errorMessage={''}
				pattern={'^[a-zA-Z0-9]+@[a-zA-Z0-9]+$'}
				isSingleLine
			/>
			<ReplyTextInput
				value={phone}
				onChange={onChangePhone}
				label={'전화번호 (숫자만 입력)'}
				errorMessage={''}
				pattern={'[0-9]+'}
				isSingleLine
			/>
			<CustomButton
				label={'가입 완료'}
				onClick={() => alert('가입 완료')}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
				disabled={!(id && password && passwordForCheck && name && email && phone)}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> div {
			margin: 5.5rem 0;

			:first-of-type {
				margin-top: 1rem;
			}

			:last-of-type {
				margin-bottom: 0;
			}
		}

		> button {
			width: 100%;
			margin-top: 3.2rem;
		}
	`;
}
