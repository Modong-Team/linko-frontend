import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import {
	svgLandingEllipse,
	svgLogo,
	svgLandingLogo,
	svgLandingCard1,
	svgLandingCard2,
	svgKakao,
} from '../../../styles/svgs';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { svgLandingCard3, svgFree, svgSafe } from '../../../styles/svgs';
import { Devices } from '../../../styles/devices';
import useMobile from '../../../hooks/useMobile';
import { Fonts } from '../../../styles/fonts';
import useRouteToPath from '../../../hooks/useRouteToPath';
import { Paths } from '../../../constants/paths';
import { Urls } from '../../../constants/urls';

export default function LandingPage() {
	const isMobile = useMobile();
	const onRouteToLogin = useRouteToPath(Paths.login);
	const onRouteToContact = useRouteToPath(Urls.kakaoChannel);
	const onRouteToDetail = useRouteToPath(Urls.detailPage);
	return (
		<S.Container>
			<header>{svgLogo}</header>
			<section>
				<h1>
					효율적인 리쿠르팅을 위한
					<br />
					가장 손쉬운 솔루션
				</h1>
				<p>
					지원서 생성부터 모집, 지원자 관리 그리고 평가까지
					<br />
					링코를 통해 한 공간에서 리쿠르팅을 진행해보세요.
				</p>
				<div>
					<CustomButton
						label={'링코 시작하기'}
						onClick={onRouteToLogin}
						buttonType={ButtonTypes.primary}
						buttonSize={ButtonSizes.large}
					/>
					<CustomButton
						label={'이용 문의'}
						onClick={onRouteToContact}
						buttonType={ButtonTypes.secondary}
						buttonSize={ButtonSizes.large}
					/>
				</div>
			</section>
			<section>
				{svgLandingEllipse}
				<div>
					<h1>{svgLandingLogo}</h1>
					{!isMobile && (
						<h2>
							이젠 여러 툴을 넘나들 필요 없이
							<br />
							링코로 한번에 해결하세요!
						</h2>
					)}
					{isMobile && (
						<h2>
							이제는 링코로 한번에
							<br />
							해결하세요!
						</h2>
					)}
				</div>
				{!isMobile && (
					<p>
						지원서 수합 따로, 지원자 평가 따로,
						<br />
						운영진 소통 따로 하는 동아리 모집!
						<br />
						번거롭지 않으셨나요?
					</p>
				)}
				{isMobile && (
					<p>
						지원서 수합 따로, 평가 따로, 운영진 회의 따로
						<br />
						여러 툴을 넘나드는 동아리 모집!
						<br />
						번거롭지 않으셨나요?
					</p>
				)}
			</section>
			<section>
				<div>
					<h1>간편한 동아리 모집 시작</h1>
					<h2>
						지원자의 필수정보부터 다양한 질문까지
						<br />
						손쉽게 지원서를 생성하고,{isMobile ? <br /> : ' '}모집링크를 간편하게 공유하세요.
					</h2>
					<div>{svgLandingCard1}</div>
				</div>
				<div>
					<h1>한눈에 확인하는 지원 현황</h1>
					<h2>
						모집 단계별 지원자를 한눈에 확인하고,
						<br />
						합격자와 탈락자를 쉽고 빠르게 관리해보세요.
					</h2>
					<div>{svgLandingCard2}</div>
				</div>
				<div>
					<h1>
						지원서 확인과 평가를
						<br />
						빠르게 한 곳에서, 동료와 함께
					</h1>
					{!isMobile && (
						<h2>
							지원서를 확인하며 평점과 코멘트를 남기고, 평가 내용을
							<br />
							다른 운영진과 공유하며 더욱 체계적으로 평가할 수 있어요.
						</h2>
					)}
					{isMobile && (
						<h2>
							지원서를 확인하며 평점과 코멘트를 남기고,
							<br />
							평가 내용을 다른 운영진과 공유하며
							<br />
							더욱 체계적으로 평가할 수 있어요.
						</h2>
					)}
					<div>
						{svgLandingCard3}
						<CustomButton
							label={'상세 기능 살펴보기'}
							onClick={onRouteToDetail}
							buttonType={ButtonTypes.secondary}
							buttonSize={ButtonSizes.medium}
						/>
					</div>
				</div>
				<div>
					<S.InfoLabel>
						<div>{svgFree}</div>
						<div>
							링코의 모든 기능은 <b>무료</b>!
						</div>
					</S.InfoLabel>
					<S.InfoLabel>
						<div>{svgSafe}</div>
						<div>
							모집과 지원자 정보는 동아리
							<br />
							<b>운영진만 열람 가능</b>하니 안심!
						</div>
					</S.InfoLabel>
				</div>
			</section>
			<section>
				<h1>링코는 지금 베타 테스트 중!</h1>
				<div>
					<h2>
						베타 서비스 기간
						<br />
						<span>(서비스 이용 기간)</span>
					</h2>
					<p>2023. 3. 1 – 2023. 4. 30</p>
					<h2>인터뷰 참여 혜택</h2>
					<p>서비스 사용 이후 진행되는 인터뷰 참여 완료 시 기프티콘 증정</p>
				</div>
				<ul>
					<li>
						더 좋은 서비스를 만들기 위해 이용자를 대상으로 서비스 이용에 대한 인터뷰를 요청할 수
						있어요.
					</li>
					<li>
						베타 서비스 종료 후 모든 정보는 삭제될 예정이에요. 추후 동아리 운영에 필요한 정보가
						있다면, 링코의 백업 기능을 이용하거나, 타 서비스를 통해 미리 백업해주세요.
					</li>
				</ul>
			</section>
			<section>
				<div>
					<CustomButton
						label={'링코 시작하기'}
						onClick={onRouteToLogin}
						buttonType={ButtonTypes.primary}
						buttonSize={ButtonSizes.large}
					/>
					<CustomButton
						label={'이용 문의'}
						onClick={onRouteToContact}
						buttonType={ButtonTypes.secondary}
						buttonSize={ButtonSizes.large}
					/>
				</div>
				<div>
					<h1>{svgLandingLogo}</h1>
					<ul>
						<li>이용 문의</li>
						<div onClick={onRouteToContact}>{svgKakao}</div>
					</ul>
					<h2>© 2023. Linko all rights reserved.</h2>
				</div>
			</section>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		width: 100vw;
		overflow: hidden;

		* {
			white-space: nowrap;
			transition: 0.3s ease;
		}

		> header {
			padding: 2rem 0;
			border-bottom: 0.1rem solid ${Colors.gray200};
			display: flex;
			align-items: center;
			justify-content: center;

			/* Linko */
			> svg {
				width: 6.8rem;
			}
		}

		> section:first-of-type {
			padding-top: 16.9rem;
			padding-bottom: 14.9rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2.4rem;

			@media ${Devices.mobile} {
				padding-top: 7.1rem;
				padding-bottom: 10.4rem;
				gap: 1.6rem;
			}

			/* 가장 손쉬운 솔루션 */
			> h1 {
				font-size: 5.6rem;
				font-weight: 700;
				line-height: 138%;
				text-align: center;

				@media ${Devices.mobile} {
					font-size: 2.8rem;
				}
			}

			/* 진행해보세요 */
			> p {
				font-size: 2.6rem;
				font-weight: 600;
				line-height: 138%;
				color: ${Colors.gray800};
				margin-bottom: 1.8rem;

				@media ${Devices.mobile} {
					font-size: 1.6rem;
					margin-bottom: 1.6rem;
				}
			}

			/* 버튼 래퍼 */
			> div {
				display: flex;
				gap: 1.6rem;

				@media ${Devices.mobile} {
					flex-direction: column;
					width: 24rem;
					gap: 0.8rem;
				}
			}
		}

		> section:nth-of-type(2) {
			width: 100%;
			height: 60rem;
			background-color: #101d35;
			position: relative;
			overflow: hidden;

			@media ${Devices.mobile} {
				height: 46.4rem;
			}

			* {
				color: ${Colors.white};
			}

			/* Linko */
			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 4rem;
				position: absolute;
				left: 50%;
				bottom: 7.7rem;
				transform: translateX(-20%);

				@media ${Devices.mobile} {
					gap: 2.3rem;
					transform: translateX(-50%);
					bottom: 5.8rem;
				}

				/* 한번에 해결하세요 */
				> h2 {
					font-size: 4rem;
					font-weight: 600;
					line-height: 140%;
					text-align: center;

					@media ${Devices.mobile} {
						font-size: 2.8rem;
					}
				}

				svg {
					@media ${Devices.mobile} {
						width: 19rem;
						height: 5.6rem;
					}
				}
			}

			/* 번거롭지 않으셨나요? */
			> p {
				font-size: 2.6rem;
				font-weight: 600;
				line-height: 140%;
				position: absolute;
				top: 5.4rem;
				left: 50%;
				transform: translateX(-120%);

				@media ${Devices.mobile} {
					font-size: 1.8rem;
					transform: translateX(-50%);
					text-align: center;
					top: 5.6rem;
				}
			}

			/* 타원 */
			> svg {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-35%);

				@media ${Devices.mobile} {
					transform: translateX(-58%);
					bottom: -5rem;
					width: 88rem;
				}
			}
		}

		> section:nth-of-type(3) {
			padding: 12rem 0;
			display: flex;
			flex-direction: column;
			gap: 3rem;

			@media ${Devices.mobile} {
				gap: 7rem;
			}

			> div {
				* {
					text-align: center;
				}

				/* 제목 */
				> h1 {
					font-size: 4.8rem;
					font-weight: 700;
					line-height: 140%;
					margin-bottom: 1.6rem;

					@media ${Devices.mobile} {
						font-size: 2.8rem;
					}
				}

				/* 소제목 */
				> h2 {
					font-size: 2.8rem;
					font-weight: 600;
					line-height: 138%;
					color: ${Colors.gray800};

					@media ${Devices.mobile} {
						font-size: 1.6rem;
						line-height: 150%;
					}
				}

				/* 이미지 */
				> div {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					top: -2.7rem;

					@media ${Devices.mobile} {
						top: -0.5rem;

						> svg {
							width: 110%;
							height: 100%;
						}
					}

					/* 상세 기능 살펴보기 */
					> button {
						width: fit-content;
						position: relative;
						top: -2rem;

						@media ${Devices.mobile} {
							top: 0;
						}
					}
				}
			}
		}

		> section:nth-of-type(4) {
			background: linear-gradient(180deg, #6495f9 0%, #93b7ff 100%);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2.4rem;
			padding-top: 5.6rem;
			padding-bottom: 7.3rem;

			@media ${Devices.mobile} {
				padding-bottom: 5.3rem;
			}

			> * {
				width: 58.8rem;

				@media ${Devices.mobile} {
					width: 90%;
				}
			}

			/* 링코는 지금 베타 테스트 중 */
			> h1 {
				font-size: 4rem;
				font-weight: 700;
				color: #e3ffa3;
				text-align: center;

				@media ${Devices.mobile} {
					font-size: 2.8rem;
				}
			}

			/* 베타 서비스 기간 및 인터뷰 참여 혜택 */
			> div {
				background: ${Colors.white};
				padding: 2.7rem 4.8rem;
				padding-bottom: 4.4rem;
				border-radius: 1.6rem;
				display: grid;
				grid-template-columns: max-content 1fr;
				row-gap: 1.3rem;
				column-gap: 1.7rem;

				@media ${Devices.mobile} {
					padding: 2.7rem 2rem;
					padding-bottom: 2.3rem;
					column-gap: 1.6rem;
				}

				> h2 {
					font-size: 1.4rem;
					font-weight: 700;
					line-height: 130%;
					color: ${Colors.blue700};
					text-align: center;

					@media ${Devices.mobile} {
						line-height: 140%;
					}

					> span {
						font-size: 1.2rem;
					}
				}

				> p {
					font-size: 1.4rem;
					font-weight: 500;
					line-height: 130%;
					white-space: normal;

					@media ${Devices.mobile} {
						line-height: 140%;
					}
				}
			}

			/* 인터뷰 및 백업 안내 */
			> ul > li {
				font-size: 1.4rem;
				font-weight: 600;
				line-height: 150%;
				color: ${Colors.white};
				display: flex;
				gap: 0.8rem;
				white-space: normal;

				@media ${Devices.mobile} {
					${Fonts.body13regular}
					line-height: 150%;
				}

				:before {
					content: '·';
					font-weight: 800;
					color: ${Colors.white};
					margin-left: 0.8rem;
				}
			}
		}

		> section:last-of-type {
			background-color: #101d35;
			padding: 5.6rem 4rem;
			padding-bottom: 7.4rem;

			@media ${Devices.mobile} {
				padding: 5.6rem 1.6rem;
				padding-bottom: 2.6rem;
			}

			/* 버튼 래퍼 */
			> div:first-of-type {
				width: fit-content;
				margin: 0 auto;
				display: flex;
				gap: 1.6rem;
				margin-bottom: 12.8rem;

				@media ${Devices.mobile} {
					flex-direction: column;
					width: 24rem;
					gap: 0.8rem;
					margin-bottom: 7.2rem;
				}
			}

			/* 푸터 */
			> div:nth-of-type(2) {
				display: flex;
				flex-direction: column;
				gap: 3.2rem;

				> h1 > svg {
					width: 6.7rem;
					height: 2rem;
				}

				> ul > li {
					${Fonts.subtitle14semibold}
					color: ${Colors.white};
					line-height: 150%;
					margin-bottom: 0.8rem;
				}

				> ul svg {
					cursor: pointer;
				}

				> h2 {
					font-size: 1.4rem;
					color: ${Colors.white};
				}
			}
		}
	`;

	/* 남색 라벨 */
	export const InfoLabel = styled.div`
		flex-direction: row !important;
		top: unset !important;
		background-color: #101d35;
		width: 58.8rem;
		height: 18rem;
		border-radius: 2.8rem;
		align-items: center;
		gap: 3rem;
		padding: 0 3.5rem;
		margin: 0 auto;
		overflow: hidden;

		@media ${Devices.mobile} {
			width: 90%;
			height: 9.6rem;
			border-radius: 1.6rem;
			padding: 0 2.1rem;
			gap: 1.6rem;
		}

		:first-of-type {
			margin-top: 3rem;
			margin-bottom: 2.4rem;

			@media ${Devices.mobile} {
				margin-bottom: 1.6rem;
			}
		}

		/* SVG */
		> div:first-of-type {
			display: flex;
			justify-content: center;
			flex-shrink: 0;
			width: 11rem;

			@media ${Devices.mobile} {
				width: 6rem;
			}
		}

		> div {
			font-size: 3.2rem;
			font-weight: 700;
			color: ${Colors.white};
			line-height: 150%;
			text-align: left !important;

			@media ${Devices.mobile} {
				${Fonts.heading18bold}
			}

			> b {
				font-size: inherit;
				font-weight: inherit;
				color: #e3ffa3;
			}
		}
	`;
}
