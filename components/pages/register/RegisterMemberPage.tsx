import styled from 'styled-components';
import CustomButton from '../../buttons/CustomButton';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { postRegister } from '../../../api/register';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import useCustomRouter from '../../../hooks/useCustomRouter';
import { Paths } from '../../../constants/paths';
import useLoadingStatus from '../../../hooks/useLoadingStatus';

export default function RegisterMemberPage({ clubId }: RegisterMemberPageProps) {
	const { onRouteToPath } = useCustomRouter();
	const { onStartGlobalLoading, onFinishGlobalLoading } = useLoadingStatus();

	const formik = useFormik({
		initialValues: {
			memberId: '',
			password: '',
			passwordForCheck: '',
			name: '',
			email: '',
			phone: '',
		},
		validationSchema: object({
			memberId: string().min(3).max(20).required(),
			password: string()
				.min(6)
				.max(20)
				.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
				.required(),
			name: string().required(),
			email: string().email().required(),
			phone: string()
				.length(11)
				.matches(/^[0-9]+$/)
				.required(),
		}),
		onSubmit: async () => {
			onStartGlobalLoading();
			const post = await postRegister({ ...formik.values, clubCode: clubId });
			onFinishGlobalLoading();
			if (post) onRouteToPath(Paths.registerMemberComplete);
		},
		validateOnChange: true,
		validateOnMount: true,
	});

	const checkIfErrorExist = () => {
		for (const error in formik.errors) if (error !== '') return true;
		return false;
	};

	return (
		<S.Container>
			<ReplyTextInput
				name={'memberId'}
				value={formik.values.memberId}
				isError={formik.touched.memberId && !!formik.errors.memberId}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={'아이디 (3~20자)'}
				errorMessage={'아이디를 올바르게 입력해주세요.'}
				maxLength={20}
				isSingleLine
			/>
			<ReplyTextInput
				name={'password'}
				value={formik.values.password}
				isError={formik.touched.password && !!formik.errors.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={'비밀번호 (숫자, 영문, 특수문자 조합 6~20자)'}
				errorMessage={'비밀번호를 올바르게 입력해주세요.'}
				type={'password'}
				maxLength={20}
				isSingleLine
			/>
			<ReplyTextInput
				name={'passwordForCheck'}
				value={formik.values.passwordForCheck}
				isError={
					formik.touched.passwordForCheck &&
					formik.values.password !== formik.values.passwordForCheck
				}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={'비밀번호 확인'}
				errorMessage={'비밀번호가 일치하지 않습니다.'}
				type={'password'}
				maxLength={20}
				isSingleLine
			/>
			<ReplyTextInput
				name={'name'}
				value={formik.values.name}
				isError={formik.touched.name && !!formik.errors.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={'사용자 이름'}
				errorMessage={'이름을 올바르게 입력해주세요.'}
				isSingleLine
			/>
			<ReplyTextInput
				name={'email'}
				value={formik.values.email}
				isError={formik.touched.email && !!formik.errors.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={'이메일'}
				errorMessage={'이메일을 올바르게 입력해주세요.'}
				isSingleLine
			/>
			<ReplyTextInput
				name={'phone'}
				value={formik.values.phone}
				isError={formik.touched.phone && !!formik.errors.phone}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={'전화번호 (숫자만 입력)'}
				errorMessage={'전화번호를 올바르게 입력해주세요.'}
				maxLength={11}
				isSingleLine
			/>
			<CustomButton
				label={'가입 완료'}
				onClick={formik.handleSubmit}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
				disabled={checkIfErrorExist()}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.form`
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
