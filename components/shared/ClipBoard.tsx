import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgCopy24 } from '../../styles/svgs';
import copyToClipBoard from '../../utils/copyToClipBoard';
import createReplyUrl from '../../utils/createReplyUrl';

export default function ClipBoard({ onTriggerSnackBar, urlId, width }: ClipBoardProps) {
	const onClick = () => {
		copyToClipBoard(createReplyUrl(urlId));
		onTriggerSnackBar();
	};
	return (
		<S.Container onClick={onClick} width={width}>
			<div>{createReplyUrl(urlId)}</div>
			<div>{svgCopy24}</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<WidthType>`
		width: ${(props) => props.width || '21.8rem'};
		margin: 0 auto;
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
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		> div:last-of-type {
			display: flex;
		}
	`;
}
