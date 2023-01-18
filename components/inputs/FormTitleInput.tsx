import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export default function FormTitleInput() {
	return (
		<S.Container>
			<input value={'질문 페이지(1)'} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> input {
			${Fonts.heading24bold}
			background-color: transparent;
			color: ${Colors.gray900};
			width: 100%;
			height: 3.5rem;
			padding: 0;
			caret-color: ${Colors.blue500};
			border-bottom: 0.1rem solid ${Colors.white};
			transition: 0.3s ease;

			&:hover {
				border-color: ${Colors.gray700};
			}

			&:focus {
				border-color: ${Colors.blue500};
			}

			&::placeholder {
				color: ${Colors.gray500};
			}
		}
	`;
}
