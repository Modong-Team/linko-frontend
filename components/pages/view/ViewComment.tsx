import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgStar } from '../../../styles/svgs';

export default function ViewComment({
	name,
	content,
	isMine,
	isRateComment,
	rate,
}: ViewCommentProps) {
	return (
		<S.Container isFocus={isMine}>
			<h1>
				{name}
				{isRateComment && (
					<div>
						{svgStar}
						{rate}
					</div>
				)}
			</h1>
			<p>{content}</p>
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
				width: 4.2rem;
			}
		}

		> p {
			${Fonts.body14regular}
		}
	`;
}
