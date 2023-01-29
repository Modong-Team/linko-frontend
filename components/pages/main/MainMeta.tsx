import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgLink24, svgCopy24 } from '../../../styles/svgs';
import copyToClipBoard from '../../../utils/copyToClipBoard';
import useSnackBar from '../../../hooks/useSnackBar';
import SnackBar from '../../shared/SnackBar';
import MoreButton from '../../buttons/MoreButton';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import useApplication from '../../../hooks/useApplication';
import createReplyUrl from '../../../utils/createReplyUrl';

export default function MainMeta() {
	const { application } = useApplication();
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();

	const onClickClipBoard = (url: string) => {
		copyToClipBoard(url);
		onTriggerSnackBar();
	};

	return (
		<S.BoardHeader>
			<h1>{application.data.title}</h1>
			<div>
				<S.BoardLinkLabel>{svgLink24}지원 링크</S.BoardLinkLabel>
				<S.BoardClipBoard onClick={() => onClickClipBoard(createReplyUrl(application.data.urlId))}>
					<div>{createReplyUrl(application.data.urlId)}</div>
					<div>{svgCopy24}</div>
				</S.BoardClipBoard>
				<CustomButton
					label={'모집 중 (구현 중)'}
					onClick={() => alert('미구현 피쳐')}
					buttonType={ButtonTypes.primary}
					buttonSize={ButtonSizes.medium}
				/>
				<MoreButton
					label1={'지원서 수정'}
					label2={'지원서 삭제'}
					onClick1={() => console.log('지원서 수정')}
					onClick2={() => console.log('지원서 삭제')}
				/>
			</div>
			{isShowSnackBar && <SnackBar label={'링크를 복사했어요.'} />}
		</S.BoardHeader>
	);
}

namespace S {
	export const BoardHeader = styled.div`
		padding: 1.6rem 0rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 0.1rem solid ${Colors.gray200};

		> h1 {
			${Fonts.heading26bold}
			white-space: nowrap;
			max-width: 55%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		> div {
			display: flex;
			gap: 1.6rem;
			align-items: center;

			> * {
				flex-shrink: 0;
			}

			> button {
				height: 4rem;
			}
		}
	`;

	export const BoardLinkLabel = styled.div`
		${Fonts.button14bold}
		display: flex;
		align-items: center;
		gap: 0.4rem;

		svg {
			position: relative;
			top: -0.05rem;
		}
	`;

	export const BoardClipBoard = styled.div`
		padding: 0.8rem 1.6rem;
		border-radius: 0.8rem;
		background-color: ${Colors.gray200};
		display: flex;
		align-items: center;
		height: 4rem;
		cursor: pointer;

		> div:first-of-type {
			${Fonts.body14regular}
			color: ${Colors.gray800};
			width: 16rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		> div:last-of-type {
			display: flex;
		}
	`;

	export const BoardVertical = styled.div`
		cursor: pointer;
	`;
}
