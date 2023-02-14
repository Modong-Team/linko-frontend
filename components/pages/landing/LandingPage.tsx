import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import {
	svgLandingEllipse,
	svgLogo,
	svgLandingLogo,
	svgLandingCard1,
	svgLandingCard2,
} from '../../../styles/svgs';
import CustomButton from '../../buttons/CustomButton';
import { ButtonTypes, ButtonSizes } from '../../../constants/buttons';
import { svgLandingCard3, svgFree, svgSafe } from '../../../styles/svgs';

export default function LandingPage() {
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
						onClick={console.log}
						buttonType={ButtonTypes.primary}
						buttonSize={ButtonSizes.large}
					/>
					<CustomButton
						label={'이용 문의'}
						onClick={console.log}
						buttonType={ButtonTypes.secondary}
						buttonSize={ButtonSizes.large}
					/>
				</div>
			</section>
			<section>
				{svgLandingEllipse}
				<div>
					<h1>{svgLandingLogo}</h1>
					<h2>
						이젠 여러 툴을 넘나들 필요 없이
						<br />
						링코로 한번에 해결하세요!
					</h2>
				</div>
				<p>
					지원서 수합 따로, 지원자 평가 따로,
					<br />
					운영진 소통 따로 하는 동아리 모집!
					<br />
					번거롭지 않으셨나요?
				</p>
			</section>
			<section>
				<div>
					<h1>간편한 동아리 모집 시작</h1>
					<h2>
						지원자의 필수정보부터 다양한 질문까지
						<br />
						손쉽게 지원서를 생성하고, 모집링크를 간편하게 공유하세요
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
					<h2>
						지원서를 확인하며 평점과 코멘트를 남기고, 평가 내용을
						<br />
						다른 운영진과 공유하며 더욱 체계적으로 평가할 수 있어요.
					</h2>
					<div>
						{svgLandingCard3}
						<CustomButton
							label={'상세 기능 살펴보기'}
							onClick={console.log}
							buttonType={ButtonTypes.secondary}
							buttonSize={ButtonSizes.medium}
						/>
					</div>
				</div>
				<div>
					<S.InfoLabel>
						{svgFree}
						<div>
							링코의 모든 기능은 <b>무료</b>!
						</div>
					</S.InfoLabel>
					<S.InfoLabel>
						{svgSafe}
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
					<p>2023. 3. 1 – 2023. 3. 31</p>
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
						onClick={console.log}
						buttonType={ButtonTypes.primary}
						buttonSize={ButtonSizes.large}
					/>
					<CustomButton
						label={'링코 시작하기'}
						onClick={console.log}
						buttonType={ButtonTypes.secondary}
						buttonSize={ButtonSizes.large}
					/>
				</div>
				<div>
					<h1>{svgLandingLogo}</h1>
					<ul>
						<li>문의</li>
						<li>이메일</li>
						<li>카카오톡 문의</li>
					</ul>
					<h2>© 2023. Linko all rights reserved.</h2>
				</div>
			</section>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> header {
			padding: 2rem 0;
			border-bottom: 0.1rem solid ${Colors.gray200};
			display: flex;
			align-items: center;
			justify-content: center;

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

			> h1 {
				font-size: 5.6rem;
				font-weight: 700;
				line-height: 7.8rem;
				text-align: center;
			}

			> p {
				font-size: 2.6rem;
				font-weight: 600;
				line-height: 3.6rem;
				color: ${Colors.gray800};
				margin-bottom: 1.8rem;
			}

			> div {
				display: flex;
				gap: 1.6rem;
			}
		}

		> section:nth-of-type(2) {
			width: 100%;
			height: 60rem;
			background-color: #101d35;
			position: relative;

			* {
				color: ${Colors.white};
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 4rem;
				position: absolute;
				right: 0;
				bottom: 7.7rem;
				transform: translateX(-17vw);

				> h2 {
					font-size: 4rem;
					font-weight: 600;
					line-height: 5.6rem;
					text-align: center;
				}
			}

			> p {
				font-size: 2.6rem;
				font-weight: 600;
				line-height: 3.6rem;
				position: absolute;
				top: 5.4rem;
				left: 10vw;
			}

			> svg {
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}

		> section:nth-of-type(3) {
			padding: 12rem 0;
			display: flex;
			flex-direction: column;
			gap: 3rem;

			> div {
				* {
					text-align: center;
				}

				> h1 {
					font-size: 4.8rem;
					font-weight: 700;
					line-height: 6.7rem;
					margin-bottom: 1.6rem;
				}

				> h2 {
					font-size: 2.8rem;
					font-weight: 600;
					line-height: 3.9rem;
					color: ${Colors.gray800};
				}

				> div {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					top: -2.7rem;

					> button {
						width: fit-content;
						position: relative;
						top: -2rem;
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

			> * {
				width: 58.8rem;
			}

			> h1 {
				font-size: 4rem;
				font-weight: 700;
				color: #e3ffa3;
				text-align: center;
			}

			> div {
				background: ${Colors.white};
				padding: 2.7rem 4.8rem;
				padding-bottom: 4.4rem;
				border-radius: 1.6rem;
				display: grid;
				grid-template-columns: max-content 1fr;
				row-gap: 1.3rem;
				column-gap: 1.7rem;

				> h2 {
					font-size: 1.4rem;
					font-weight: 700;
					line-height: 1.8rem;
					color: ${Colors.blue700};
					text-align: center;

					> span {
						font-size: 1.2rem;
					}
				}

				> p {
					font-size: 1.4rem;
					font-weight: 500;
					line-height: 1.8rem;
				}
			}

			> ul > li {
				font-size: 1.4rem;
				font-weight: 500;
				line-height: 2.1rem;
				color: ${Colors.white};
				display: flex;
				gap: 0.8rem;

				:before {
					content: '·';
					font-weight: 800;
					color: ${Colors.white};
				}
			}
		}

		> section:last-of-type {
			background-color: #101d35;
			padding: 5.6rem 4rem;

			> div:first-of-type {
				width: fit-content;
				margin: 0 auto;
				display: flex;
				gap: 1.6rem;
				margin-bottom: 12.8rem;
			}

			> div:nth-of-type(2) {
				display: flex;
				flex-direction: column;
				gap: 2.4rem;

				> h1 > svg {
					width: 6.7rem;
					height: 2rem;
				}

				> ul > li {
					font-size: 1.4rem;
					color: ${Colors.white};
					line-height: 2.1rem;
				}

				> h2 {
					font-size: 1.4rem;
					color: ${Colors.white};
				}
			}
		}
	`;

	export const InfoLabel = styled.div`
		flex-direction: row !important;
		top: unset !important;
		background-color: #101d35;
		width: 58.8rem;
		height: 18rem;
		border-radius: 2.8rem;
		align-items: center;
		gap: 4rem;
		padding: 0 3.5rem;
		margin: 0 auto;

		:first-of-type {
			margin-top: 3rem;
			margin-bottom: 2.4rem;
		}

		> div {
			font-size: 3.2rem;
			font-weight: 700;
			color: ${Colors.white};
			line-height: 4.8rem;

			> b {
				font-size: inherit;
				font-weight: inherit;
				color: #e3ffa3;
			}
		}
	`;
}
