import styled from 'styled-components';
import { Colors } from './colors';
import { Devices } from './devices';
import { Styles } from './styles';

export namespace SC {
	export const HeaderContainer = styled.header`
		background: ${Colors.white};
		border-bottom: 0.1rem solid ${Colors.gray200};
		height: ${Styles.headerHeight};
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2.4rem;
	`;

	export const HeaderLogo = styled.h1``;

	export const NewMainContainer = styled.div`
		background-color: ${Colors.white};
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};
		padding: 4rem;
	`;

	export const ReplySelectInputContainer = styled.div`
		&:not(:last-of-type) {
			margin-bottom: 2rem;

			@media ${Devices.mobile} {
				margin-bottom: 2.97rem;
			}
		}

		* {
			cursor: pointer;
		}

		> input {
			display: none;
		}

		/* Default */
		svg {
			> path:nth-of-type(2),
			> path:nth-of-type(3) {
				fill: transparent;
			}

			path {
				transition: 0.3s ease;
			}
		}

		/* Checked */
		> input:checked + label > svg {
			> path:nth-of-type(1),
			> path:nth-of-type(2) {
				fill: ${Colors.blue500};
			}

			> path:nth-of-type(3) {
				fill: ${Colors.white};
			}
		}

		> label {
			display: flex;
			align-items: center;
			gap: 0.97rem;
		}
	`;
}
