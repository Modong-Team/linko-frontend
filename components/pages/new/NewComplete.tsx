import { SC } from '../../../styles/styled';
import { Icons } from '../../../styles/icons';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { svgCopy } from '../../../styles/svgs';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { getApplication } from '../../../api/application';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';

export default function NewComplete({ applicationId }: NewCompletePageProps) {
	const onRouteToMain = useRouteToPath(Paths.main);
	const [application, setApplication] = useState<ResponseApplication.Get>();

	useEffect(() => {
		if (!isNaN(applicationId)) useGet(() => getApplication(applicationId), setApplication);
	}, [applicationId]);

	return (
		<S.Container>
			<h1>
				{Icons.hands}
				<br />
				공고 생성이 완료되었습니다!
			</h1>
			<div>
				{application && application.data.urlId}
				{svgCopy}
			</div>
			<div>
				<CustomButton
					label='수정하기'
					onClick={console.log}
					buttonType={ButtonTypes.secondary}
					buttonSize={ButtonSizes.medium}
				/>
				<CustomButton
					label='홈으로 돌아가기'
					onClick={onRouteToMain}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.medium}
				/>
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.NewMainContainer)`
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
		align-items: center;

		> h1 {
			${Fonts.heading24bold}
			text-align: center;
		}

		> div:first-of-type {
			${Fonts.subtitle16medium}
			color: ${Colors.gray700};
			background-color: ${Colors.gray100};
			padding: 0.3rem 2.4rem;
			border-radius: 0.4rem;
			display: flex;
			align-items: center;
			gap: 0.9rem;
			cursor: pointer;
		}

		> div:last-of-type {
			display: flex;
			gap: 1.2rem;
		}
	`;
}
