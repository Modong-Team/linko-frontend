import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { Styles } from '../../../styles/styles';

export default function NewIndicator({ page }: NewIndicatorProps) {
	return (
		<S.Container>
			<S.IndicatorElement isCurrent={page === -1}>
				<S.IndicatorCircle>1</S.IndicatorCircle>
				지원자 정보
			</S.IndicatorElement>
			<S.IndicatorElement isCurrent={page !== -1}>
				<S.IndicatorCircle>2</S.IndicatorCircle>질문 등록
			</S.IndicatorElement>
			<S.IndicatorElement isCurrent={false}>
				<S.IndicatorCircle>3</S.IndicatorCircle>작성 완료
			</S.IndicatorElement>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		${Styles.stickyIndicatorAndNavigator}
		display: flex;
		flex-direction: column;
		gap: 1.8rem;
		margin-right: 3.2rem;
		grid-column: 1/2;

		& {
			> div {
				${Fonts.subtitle14medium}
			}
		}
	`;

	export const IndicatorElement = styled.div<IsCurrentType>`
		display: flex;
		align-items: center;
		gap: 0.7rem;
		margin-left: 6.7rem;
		color: ${(props) => (props.isCurrent ? Colors.gray950 : Colors.gray500)};
		white-space: nowrap;

		& {
			> div {
				background-color: ${(props) => (props.isCurrent ? Colors.blue500 : '')};
				color: ${(props) => (props.isCurrent ? Colors.white : '')};
			}
		}
	`;

	export const IndicatorCircle = styled.div`
		${Fonts.button13medium}
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
		background-color: ${Colors.gray200};
		color: ${Colors.gray500};
		display: flex;
		justify-content: center;
		align-items: center;
	`;
}
