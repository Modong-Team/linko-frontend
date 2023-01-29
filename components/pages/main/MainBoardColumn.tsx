import MainBoardCard from './MainBoardCard';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { Fonts } from '../../../styles/fonts';
import MainPageButtons from './MainPageButtons';

export default function MainBoardColumn() {
	return (
		<S.Container>
			<S.Meta>
				<h2>지원 접수</h2>
				<div>8</div>
				<CustomButton
					label={'상태 변경'}
					onClick={function (): void {
						throw new Error('Function not implemented.');
					}}
					buttonType={ButtonTypes.line}
					buttonSize={ButtonSizes.small}
				/>
			</S.Meta>
			<MainBoardCard />
			<MainBoardCard />
			<MainBoardCard />
			<MainBoardCard />
			<MainBoardCard />
			<MainBoardCard />
			<MainPageButtons />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		background-color: ${Colors.background};
		border-radius: 0.8rem;
		padding: 0 0.4rem;
		display: flex;
		flex-direction: column;
	`;

	export const Meta = styled.div`
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 1.2rem;

		> h2 {
			${Fonts.subtitle16semibold}
		}

		> div {
			${Fonts.subtitle16semibold}
			color: ${Colors.blue500};
		}

		> button {
			margin-left: auto;
		}
	`;
}
