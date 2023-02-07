import { svgEntireCheckbox } from '../../styles/svgs';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export default function CheckIcon({ isHover, isChecked }: CheckIconProps) {
	return (
		<S.Container isHover={isHover} isChecked={isChecked}>
			{svgEntireCheckbox}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsHoverType & IsCheckedType>`
		display: flex;
		align-items: center;

		svg {
			/* Border */
			> path:nth-of-type(1) {
				fill: ${(props) => props.isChecked && Colors.blue500};
			}

			/* Background */
			> path:nth-of-type(2) {
				fill: transparent;
				fill: ${(props) => props.isHover && Colors.gray300};
				fill: ${(props) => props.isChecked && Colors.blue500};
			}

			/* Tick */
			> path:nth-of-type(3) {
				fill: transparent;
				fill: ${(props) => props.isHover && Colors.white};
				fill: ${(props) => props.isChecked && Colors.white};
			}

			path {
				transition: 0.3s ease;
			}
		}
	`;
}
