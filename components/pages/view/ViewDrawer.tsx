import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import IconButton from '../../buttons/IconButton';
import { svgClose } from '../../../styles/svgs';
import { useState, useEffect } from 'react';
import { Fonts } from '../../../styles/fonts';
import ViewRateTab from './ViewRateTab';
import ViewMemoTab from './ViewMemoTab';
import ViewRateEditTab from './ViewRateEditTab';
import { postEvaluationCheck } from '../../../api/evaluation';
import useGet from '../../../hooks/useGet';
import useApplicantId from '../../../hooks/useApplicantId';
import useLocalLoading from '../../../hooks/useLocalLoading';
import useTriggers from '../../../hooks/useTriggers';

export default function ViewDrawer({ isDrawerOpen, onCloseDrawer }: ViewDrawerProps) {
	const [tab, setTab] = useState(1);
	const { triggers } = useTriggers();
	const { applicantId } = useApplicantId();
	const [prevRate, setPrevRate] = useState<ResponseEvaluation.PostCheck>();
	const { isLocalLoading, onStartLocalLoading, onFinishLocalLoading } = useLocalLoading();

	const onSelectRateTab = () => setTab(1);
	const onSelectMemoTab = () => setTab(2);
	const onSelectRateEditTab = () => setTab(3);

	useEffect(() => {
		if (applicantId) {
			onStartLocalLoading();
			useGet(() => postEvaluationCheck({ applicantId }), setPrevRate, onFinishLocalLoading);
		}
	}, [applicantId, triggers.evaluations]);

	return (
		<S.Container isOpen={isDrawerOpen}>
			{tab !== 3 && (
				<>
					<IconButton svgIcon={svgClose} onClick={onCloseDrawer} />
					<S.TabNavigator>
						<S.TabButton isFocus={tab === 1} onClick={onSelectRateTab}>
							평가
						</S.TabButton>
						<S.TabButton isFocus={tab === 2 || tab === 3} onClick={onSelectMemoTab}>
							메모
						</S.TabButton>
					</S.TabNavigator>
				</>
			)}
			{tab === 1 && (
				<ViewRateTab
					onSelectRateEditTab={onSelectRateEditTab}
					isPrevRateExist={prevRate?.data.exists ?? false}
				/>
			)}
			{tab === 2 && <ViewMemoTab />}
			{tab === 3 && (
				<ViewRateEditTab
					onSelectRateTab={onSelectRateTab}
					isPrevRateExist={prevRate?.data.exists ?? false}
				/>
			)}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsOpenType>`
		width: 36rem;
		height: 100%;
		background-color: ${Colors.white};
		border-left: 0.1rem solid ${Colors.gray200};
		padding: 1.6rem 2.4rem;
		padding-bottom: 3.2rem;
		position: absolute;
		top: 0;
		right: ${(props) => (props.isOpen ? 0 : '-36rem')};
		transition: 0.8s ease;
		display: flex;
		flex-direction: column;
	`;

	export const TabNavigator = styled.div`
		width: 100%;
		height: 4rem;
		flex-shrink: 0;
		background-color: ${Colors.gray100};
		border-radius: 0.8rem;
		margin-top: 3.2rem;
		margin-bottom: 2.4rem;
		padding: 0.4rem;
		display: flex;
		gap: 0.8rem;
	`;

	export const TabButton = styled.button<IsFocusType>`
		${Fonts.subtitle16semibold}
		background-color: ${(props) => props.isFocus && Colors.white};
		box-shadow: ${(props) => props.isFocus && '0px 2px 4px rgba(0, 0, 0, 0.1)'};
		color: ${(props) => !props.isFocus && Colors.gray700};
		width: 100%;
		text-align: center;
		border-radius: 0.6rem;
		transition: 0.3s ease;
	`;
}
