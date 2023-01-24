import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import useApplication from '../../../hooks/useApplication';
import { Devices } from '../../../styles/devices';

export default function ReplyMeta() {
	const { application } = useApplication();
	return (
		<S.Container>
			<div>
				<S.Photo>
					<img src='https://play-lh.googleusercontent.com/XVHP0sBKrRJYZq_dB1RalwSmx5TcYYRRfYMFO18jgNAnxHAIA1osxM55XHYTb3LpkV8' />
				</S.Photo>
				<S.Club>개발동아리</S.Club>
			</div>
			<S.Title>{application.data.title}</S.Title>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		background-color: ${Colors.white};
		padding: 3.2rem 4rem;
		padding-bottom: 2.2rem;
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray200};

		> div:first-of-type {
			display: flex;
			align-items: center;
			gap: 1.6rem;
			margin-bottom: 2.2rem;
		}

		@media ${Devices.mobile} {
			padding: 1.6rem 2.4rem;
			padding-bottom: 1.8rem;

			> div:first-of-type {
				margin-bottom: 1.2rem;
				gap: 0.8rem;
			}
		}
	`;

	export const Photo = styled.div`
		width: 7.2rem;
		height: 7.2rem;
		border-radius: 50%;
		overflow: hidden;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media ${Devices.mobile} {
			width: 4rem;
			height: 4rem;
		}
	`;

	export const Club = styled.h2`
		${Fonts.heading20bold}
		color:${Colors.gray800};

		@media ${Devices.mobile} {
			${Fonts.subtitle16semibold}
		}
	`;

	export const Title = styled.h1`
		${Fonts.heading26bold}

		@media ${Devices.mobile} {
			${Fonts.heading20bold}
		}
	`;
}
