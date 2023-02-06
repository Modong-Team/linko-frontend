import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgModong } from '../../../styles/svgs';
import CustomButton from '../../buttons/CustomButton';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import useInput from '../../../hooks/useInput';
import { Paths } from '../../../constants/paths';

export default function LoginPage() {
	const [id, onChangeId] = useInput();
	const [password, onChangePassword] = useInput();

	return (
		<S.Container>
			<h1>{svgModong}</h1>
			<h2>동아리 모집을 쉽고 빠르게</h2>
			<div>
				<ReplyTextInput
					value={id}
					onChange={onChangeId}
					label={'아이디'}
					errorMessage={''}
					isSingleLine
				/>
				<ReplyTextInput
					value={password}
					onChange={onChangePassword}
					label={'비밀번호'}
					errorMessage={''}
					type={'password'}
					isSingleLine
				/>
				<CustomButton
					label={'로그인'}
					onClick={() => alert('로그인')}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.large}
					disabled={!(id && password)}
				/>
			</div>
			<div>
				<a href={Paths.register}>회원 가입</a>
				<a>이용 문의</a>
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h1 {
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 1.2rem;
		}

		> h2 {
			${Fonts.subtitle16semibold}
			color: ${Colors.blue700};
			text-align: center;
		}

		> div:first-of-type {
			margin-bottom: 2.6rem;

			> div:first-of-type {
				margin: 5rem 0;
			}

			> button {
				width: 100%;
				margin-top: 3.2rem;
			}
		}

		> div:last-of-type {
			display: grid;
			grid-template-columns: 1fr 1fr;
			position: relative;

			> a {
				${Fonts.button13medium}
				color: ${Colors.gray900};
				padding: 0 3.2rem;

				:first-of-type {
					margin-left: auto;
				}

				:last-of-type {
					margin-right: auto;
				}
			}

			::after {
				content: '';
				position: absolute;
				width: 0.1rem;
				height: 1.3rem;
				background-color: ${Colors.gray300};
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	`;
}
