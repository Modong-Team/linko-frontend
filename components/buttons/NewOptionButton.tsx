import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgCirclePlusSmall } from '../../styles/svgs';

export default function NewOptionButton({ onClick }: Omit<CommonButtonProps, 'label'>) {
	return (
		<S.Button onClick={onClick}>
			{svgCirclePlusSmall}
			<p>항목 추가</p>
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button`
		padding: 1rem 2rem;
		padding-left: 1.6rem;
		background-color: ${Colors.white};
		border: 0.1rem solid ${Colors.gray200};
		border-radius: 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.47rem;
		width: fit-content;

		> p {
			${Fonts.subtitle14medium}
		}
	`;
}
