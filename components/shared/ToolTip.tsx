import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';
import { svgToolTipBox, svgCancel12 } from '../../styles/svgs';

export default function ToolTip({ onClose, isHidden }: ToolTipProps) {
	return (
		<S.Container isHidden={isHidden}>
			{svgToolTipBox}
			<p>
				링코의 서비스는 2023년 3월 1일부터
				<br />
				2023년 3월 31일까지 베타 서비스 기간
				<br />
				동안 이용할 수 있어요.
			</p>
			<div onClick={onClose}>{svgCancel12}</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsHiddenType>`
		position: absolute;
		z-index: 10;
		top: 0;
		right: 0;
		transform: translate(95%, -25.2%);
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => props.isHidden && 0};
		transition: 0.3s ease;
		cursor: default;

		> p {
			${Fonts.body13regular}
			position: absolute;
			left: 7rem;
			top: 50%;
			transform: translateY(-57%);
			line-height: 150%;
		}

		> div {
			position: absolute;
			top: 3.3rem;
			right: 4.2rem;
			cursor: pointer;

			> svg {
				width: 0.9rem;
			}
		}
	`;
}
