import styled, { css } from 'styled-components';
import { Colors } from './colors';
import { Devices } from './devices';
import { Fonts } from './fonts';
import { Styles } from './styles';

export namespace SC {
	export const HeaderContainer = styled.header`
		background: ${Colors.white};
		border-bottom: 0.1rem solid ${Colors.gray200};
		height: ${Styles.headerHeight};
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2.8rem;

		@media ${Devices.mobile} {
			height: 6.9rem;
			justify-content: center;
		}
	`;

	export const HeaderLogo = styled.h1`
		cursor: pointer;

		> svg {
			width: 8.1rem;

			@media ${Devices.mobile} {
				display: flex;
				width: 6.8rem;
			}
		}
	`;

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

	export const HideScrollBar = css`
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	`;

	export const CustomizedScrollbar = css<IsScrollExistType>`
		padding-right: ${(props) => props.isScrollExist && '0rem'};

		::-webkit-scrollbar {
			width: 1.2rem;
		}

		::-webkit-scrollbar-thumb {
			background: ${Colors.gray400};
			background-clip: padding-box;
			border: 0.3rem solid transparent;
			border-radius: 1rem;
		}
	`;

	export const ModalBackground = styled.div<IsHiddenType & HeightType>`
		background-color: ${Colors.shade};
		width: 100vw;
		height: ${(props) => props.height};
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.3s ease;
		visibility: ${(props) => props.isHidden && 'hidden'};
		opacity: ${(props) => (props.isHidden ? 0 : 1)};

		@media ${Devices.mobile} {
			padding: 2.4rem;
		}
	`;

	export const ModalContainer = styled.div`
		width: 50rem;
		padding: 2.4rem;
		padding-top: 4rem;
		text-align: center;
		background-color: ${Colors.white};
		box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.12);
		border-radius: 1.2rem;

		@media ${Devices.mobile} {
			padding: 2rem;
			padding-bottom: 2.4rem;
		}
	`;

	export const ModalIcon = styled.div`
		${Fonts.heading24bold}
	`;

	export const ModalTitle = styled.div`
		${Fonts.heading24bold}
		margin-bottom: 0.4rem;
		word-break: keep-all;
	`;

	export const ModalSubtitle = styled.div`
		${Fonts.subtitle16medium}
		color: ${Colors.gray700};
		margin-bottom: 2.4rem;
	`;

	export const ModalButtonWrapper = styled.div`
		display: flex;
		width: 100%;
		gap: 0.8rem;

		button {
			width: 100%;
		}
	`;
}
