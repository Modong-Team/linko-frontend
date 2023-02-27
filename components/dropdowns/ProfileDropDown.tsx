import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgDown16 } from '../../styles/svgs';
import useActive from '../../hooks/useActive';
import useAuthData from '../../hooks/useAuthData';
import { useState, useEffect } from 'react';
import useGet from '../../hooks/useGet';
import { getMember } from '../../api/member';
import useLocalLoading from '../../hooks/useLocalLoading';
import LoadingDots from '../shared/LoadingDots';
import { LoadingWidths } from '../../constants/loadingWidths';

export default function ProfileDropDown() {
	const [isShowDropDown, onClick, onBlur] = useActive();
	const { authData, onRequestRevokeAuthData } = useAuthData();
	const [member, setMember] = useState<ResponseMember.Get>();
	const { isLocalLoading, onStartLocalLoading, onFinishLocalLoading } = useLocalLoading();

	const getInitial = (id: string = '') => id[0];

	useEffect(() => {
		if (!authData) return;
		onStartLocalLoading();
		useGet(getMember, setMember, onFinishLocalLoading);
	}, [authData]);

	return (
		<S.HeaderProfile onClick={onClick} onBlur={onBlur}>
			<S.ProfileInitial>
				{getInitial(member?.data.memberId)}
				<LoadingDots width={LoadingWidths.button} isHidden={!isLocalLoading} isWhite />
			</S.ProfileInitial>
			<S.ProfileArrow>{svgDown16}</S.ProfileArrow>
			{isShowDropDown && (
				<S.DropDown>
					<h1>
						<S.DropDownInitial>{getInitial(member?.data.memberId)}</S.DropDownInitial>
						{member?.data.memberId}
					</h1>
					<div>
						<p onClick={onRequestRevokeAuthData}>로그아웃</p>
					</div>
				</S.DropDown>
			)}
		</S.HeaderProfile>
	);
}

namespace S {
	export const HeaderProfile = styled.button`
		display: flex;
		align-items: center;
		gap: 0.8rem;
		position: relative;
	`;

	export const ProfileInitial = styled.div`
		${Fonts.heading18bold}
		background-color: ${Colors.blue500};
		color: ${Colors.white};
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	`;

	export const ProfileArrow = styled.div`
		display: flex;
	`;

	export const DropDown = styled.div`
		min-width: 22.4rem;
		position: absolute;
		right: 0;
		bottom: 0;
		transform: translateY(110%);
		background-color: ${Colors.white};
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 0.8rem;
		z-index: 100;

		> h1 {
			${Fonts.subtitle14semibold}
			padding: 1.6rem;
			padding-right: 9.1rem;
			border-bottom: 0.1rem solid ${Colors.gray100};
			display: flex;
			align-items: center;
			gap: 0.8rem;
		}

		> div {
			padding: 0.4rem;

			> p {
				${Fonts.subtitle14semibold}
				transition: 0.3s ease;
				width: 100%;
				text-align: center;
				padding: 0.55rem 0;
				border-radius: 0.4rem;

				:hover {
					background-color: ${Colors.gray100};
				}
			}
		}
	`;

	export const DropDownInitial = styled(ProfileInitial)`
		width: 3.2rem;
		height: 3.2rem;
		font-size: 1.92rem;
		flex-shrink: 0;
	`;
}
