import { SC } from '../../../styles/styled';
import { Icons } from '../../../styles/icons';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { getApplication } from '../../../api/application';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import SnackBar from '../../shared/SnackBar';
import useSnackBar from '../../../hooks/useSnackBar';
import useLoadingStatus from '../../../hooks/useLoadingStatus';
import ClipBoard from '../../shared/ClipBoard';

export default function NewComplete({ applicationId }: NewCompletePageProps) {
	const onRouteToMain = useRouteToPath(Paths.main);
	const [application, setApplication] = useState<ResponseApplication.Get>();
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();
	const { onStartGlobalLoading, onFinishGlobalLoading } = useLoadingStatus();

	useEffect(() => {
		if (!isNaN(applicationId))
			useGet(() => getApplication(applicationId), setApplication, onFinishGlobalLoading);
	}, [applicationId]);

	useEffect(() => {
		onStartGlobalLoading();
	}, []);

	return (
		<S.Container>
			<h1>
				{Icons.hands}
				<br />
				모집을 시작했어요!
			</h1>
			<ClipBoard
				onTriggerSnackBar={onTriggerSnackBar}
				urlId={application?.data.urlId + ''}
				width={'34rem'}
			/>
			<div>
				<CustomButton
					label='홈으로 돌아가기'
					onClick={onRouteToMain}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.medium}
				/>
			</div>
			<SnackBar label={'링크를 복사했어요.'} isShown={isShowSnackBar} />
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

		> div:nth-of-type(2) {
			display: flex;
			gap: 1.2rem;
		}
	`;
}
