import { ChangeEvent } from 'react';
import styled from 'styled-components';
import ReplyTextInput from '../../inputs/ReplyTextInput';
import useInput from '../../../hooks/useInput';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import useCustomRouter from '../../../hooks/useCustomRouter';
import { Paths } from '../../../constants/paths';
import { Urls } from '../../../constants/urls';
import useRouteToPath from '../../../hooks/useRouteToPath';

export default function RegisterMemberCodePage() {
	const [code, onChangeCode] = useInput();
	const { onRouteToPath } = useCustomRouter();
	const onRouteToContact = useRouteToPath(Urls.kakaoChannel);

	return (
		<S.Container>
			<ReplyTextInput
				value={code}
				onChange={onChangeCode}
				label={'동아리 코드'}
				errorMessage={'동아리 코드를 입력하세요.'}
				isSingleLine
			/>
			<CustomButton
				label={'다음'}
				onClick={() => onRouteToPath(Paths.registerMember + '/' + code)}
				buttonType={ButtonTypes.primary}
				buttonSize={ButtonSizes.large}
				disabled={code === ''}
			/>
			<p onClick={onRouteToContact}>이용 문의</p>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> div {
			margin-bottom: 0 !important;
		}

		> button {
			width: 100%;
			margin-top: 3.2rem;
		}

		> p {
			${Fonts.button13medium}
			color: ${Colors.gray900};
			text-align: center;
			margin-top: 2.4rem;
			cursor: pointer;
		}
	`;
}
