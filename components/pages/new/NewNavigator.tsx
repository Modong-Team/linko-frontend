import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Styles } from '../../../styles/styles';

export default function NewNavigator() {
	return (
		<S.Container>
			<S.NavigatorElement isCurrent={true}>지원자 정보</S.NavigatorElement>
			<S.NavigatorElement isCurrent={false}>지원자 정보</S.NavigatorElement>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		${Styles.stickyIndicatorAndNavigator}
		margin-left: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		grid-column: 3/4;
		grid-row: 2/5;
	`;

	export const NavigatorElement = styled.button<IsCurrentType>`
		box-sizing: border-box;
		position: relative;
		background-color: ${(props) => (props.isCurrent ? Colors.white : Colors.gray200)};
		border: 0.1rem solid ${(props) => (props.isCurrent ? Colors.gray200 : Colors.gray300)};
		color: ${(props) => (props.isCurrent ? Colors.gray900 : Colors.gray500)};
		padding: 0rem 1.6rem;
		padding-right: 1rem;
		border-radius: 0.8rem;
		width: 17.4rem;
		height: 4.8rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		span:first-child {
			width: 100%;
			white-space: nowrap;
			max-width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		span,
		svg {
			cursor: pointer;
		}

		svg {
			position: relative;
			top: 0.1rem;
		}
	`;
}
