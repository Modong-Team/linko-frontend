import { SC } from '../../styles/styled';
import usePreventScroll from '../../hooks/usePreventScroll';
import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import withoutPropagation from '../../utils/withoutPropagation';
import { Urls } from '../../constants/urls';
import { Devices } from '../../styles/devices';
import useMobile from '../../hooks/useMobile';
import { svgCancel12 } from '../../styles/svgs';

export default function AgreementModal({ onClose, isHidden }: AgreementModalProps) {
	const isMobile = useMobile();
	usePreventScroll(!isHidden);
	return (
		<S.Background isHidden={isHidden} height={window.innerHeight + 'px'} onClick={onClose}>
			<S.Container onClick={withoutPropagation}>
				{isMobile && <S.Cancel onClick={onClose}>{svgCancel12}</S.Cancel>}
				<h1>개인정보 수집 이용 동의 (필수)</h1>
				<p>
					1. 수집목적
					<br />- 사용자 식별
					<br /> - 서비스 제공
					<br />- 민원사무 처리
					<br />- 서비스 안내 및 공지
					<br />- 서비스 보완을 위한 인터뷰 요청 및 인터뷰 보상 전달
				</p>
				<p>
					2. 수집항목
					<br />
					회원가입 시 (필수)
					<br />
					아이디, 비밀번호, 이메일, 이름, 이메일, 휴대폰번호
				</p>
				<p>
					3. 보유기간
					<br />
					수집된 정보는 링코 베타 서비스 가입 및 제공 기간(2023. 2. 16 ~ 2023. 3. 31) 이후 지체 없이
					파기됩니다. 서비스 제공을 위해 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스
					이용이 가능합니다.
				</p>
				<p>
					4. 동의 거부시 불이익
					<br />
					귀하는 개인정보 제공 등에 관해 동의하지 않을 권리가 있습니다. 다만, 필수수집 동의를 하지
					않을 경우 가입이 제한될 수 있습니다.
				</p>
				<p>
					더 자세한 내용에 대해서는{' '}
					<span>
						<a href={Urls.privacyPolicy} target='_blank'>
							개인정보처리방침
						</a>
					</span>
					을 참고하시기 바랍니다.
				</p>
			</S.Container>
		</S.Background>
	);
}

namespace S {
	export const Background = styled(SC.ModalBackground)`
		margin: 0 !important;
		cursor: pointer;

		@media ${Devices.mobile} {
			padding: 0;
		}
	`;

	export const Container = styled.div`
		width: 56rem;
		padding: 8rem;
		background-color: ${Colors.white};
		cursor: default;

		@media ${Devices.mobile} {
			width: 100%;
			height: 100%;
			padding: 0 1.6rem;
		}

		> h1 {
			${Fonts.heading20bold}
			margin-bottom: 3.2rem;
			text-align: center;

			@media ${Devices.mobile} {
				margin-top: 2.4rem;
			}
		}

		> p {
			${Fonts.body14regular}

			@media ${Devices.mobile} {
				${Fonts.body13regular}
				line-height: 1.95rem;
			}

			:not(:last-of-type) {
				margin-bottom: 2.8rem;
			}

			> span {
				text-decoration: underline;
				text-underline-position: under;
				cursor: pointer;
			}
		}
	`;

	export const Cancel = styled.div`
		padding: 2rem 0.6rem;
		width: fit-content;
		cursor: pointer;
	`;
}
