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

export default function MainMeta() {
	const { isShowSnackBar, onTriggerSnackBar } = useSnackBar();

	const onClickClipBoard = () => {
		copyToClipBoard('www.modong.co.kr/club1');
		onTriggerSnackBar();
	};

	return (
		<S.BoardHeader>
			<h1>작성한 지원서1</h1>
			<div>
				<S.BoardLinkLabel>{svgLink24}지원 링크</S.BoardLinkLabel>
				<S.BoardClipBoard onClick={onClickClipBoard}>
					www.modong.co.kr/club1{svgCopy24}
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
		}

		> div {
			display: flex;
			gap: 1.6rem;
			align-items: center;

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
		${Fonts.body14regular}
		border-radius: 0.8rem;
		color: ${Colors.gray800};
		background-color: ${Colors.gray200};
		padding: 0.8rem 1.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 21.8rem;
		cursor: pointer;
	`;

	export const BoardVertical = styled.div`
		cursor: pointer;
	`;
}
