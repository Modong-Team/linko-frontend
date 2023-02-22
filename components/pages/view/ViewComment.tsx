import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgStar16 } from '../../../styles/svgs';
import MoreButton from '../../buttons/MoreButton';
import useActive from '../../../hooks/useActive';
import { deleteMemo } from '../../../api/memo';
import useTriggers from '../../../hooks/useTriggers';

export default function ViewComment({
	id,
	name,
	content,
	isMine,
	isRateComment,
	rate,
}: ViewCommentProps) {
	const [isHover, onHover, onBlur] = useActive();
	const { onTriggerRefreshMemos } = useTriggers();

	const onDeleteMemo = async () => {
		await deleteMemo(id);
		onTriggerRefreshMemos();
	};

	const onCheckIfMoreButtonShouldBeHidden = () => {
		if (isRateComment) return true;
		if (!isHover) return true;
		if (!isMine) return true;
	};

	return (
		<S.Container isFocus={isMine} onMouseOver={onHover} onMouseLeave={onBlur}>
			<h1>
				{name}
				{isRateComment && (
					<div>
						{svgStar16}
						{rate}
					</div>
				)}
			</h1>
			<p>{content}</p>
			<MoreButton
				label1={'삭제하기'}
				onClick1={onDeleteMemo}
				translateX={0}
				isHidden={onCheckIfMoreButtonShouldBeHidden()}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsFocusType>`
		padding: 1.2rem 1.6rem;
		border: 0.1rem solid;
		border-color: ${(props) => (props.isFocus ? Colors.blue500 : 'transparent')};
		background-color: ${(props) => (props.isFocus ? Colors.blue100 : Colors.white)};
		border-radius: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		position: relative;

		> h1 {
			${Fonts.subtitle14semibold}
			display: flex;
			align-items: center;
			justify-content: space-between;

			> div {
				${Fonts.subtitle16semibold}
				display: flex;
				justify-content: flex-start;
				gap: 0.4rem;
				align-items: center;
				width: 4.5rem;

				> * {
					flex-shrink: 0;
				}
			}
		}

		> p {
			${Fonts.body14regular}
		}

		> button {
			position: absolute;
			top: 1.2rem;
			right: 1.6rem;
		}
	`;
}
