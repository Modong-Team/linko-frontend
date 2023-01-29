import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Styles } from '../../../styles/styles';
import useForms from '../../../hooks/useForms';
import { useState } from 'react';
import { svgMore } from '../../../styles/svgs';
import DropDown from '../../dropdowns/DropDown';
import withoutPropagation from '../../../utils/withoutPropagation';

export default function NewNavigator({ page, onChangePage }: NewNavigatorProps) {
	const { forms, onRemoveForm } = useForms();
	const [showMoreFor, setShowMoreFor] = useState<number | null>(null);

	const onClickMore = (e: React.MouseEvent, idx: number) => {
		setShowMoreFor(idx);
	};
	const onBlur = () => setShowMoreFor(-1);

	const onClickRemove = (e: React.MouseEvent, idx: number) => {
		setShowMoreFor(null);
		onRouteToAppropriatePage(idx);
		onRemoveForm(idx);
	};

	const onRouteToAppropriatePage = (removeTarget: number) => {
		if (removeTarget === page) onChangePage(page - 1);
		if (removeTarget <= page) onChangePage(page - 1);
	};

	return (
		<S.Container>
			<S.NavigatorElement isCurrent={page === -1} onClick={() => onChangePage(-1)}>
				지원자 정보
			</S.NavigatorElement>
			{forms.map((form, i) => (
				<S.NavigatorElement
					isCurrent={page === i}
					onClick={() => onChangePage(i)}
					onBlur={onBlur}
					key={i}>
					<span>{form.title}</span>
					<span onClick={(e) => withoutPropagation(e, () => onClickMore(e, i))}>{svgMore}</span>
					<DropDown
						option1={'삭제하기'}
						option2={'복제하기'}
						onClick1={(e) => onClickRemove(e, i)}
						onClick2={() => alert('미구현된 피쳐입니다.')}
						customCSS={`${Styles.dropDownAlignRightBottom} bottom:-6rem; right:-2rem; div:first-of-type{${Styles.dropDownOptionRed}}`}
						isHidden={showMoreFor !== i}
					/>
				</S.NavigatorElement>
			))}
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		${Styles.stickyIndicatorAndNavigator}
		margin-left: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		grid-column: 3/4;
		grid-row: 2/5;
	`;

	export const NavigatorElement = styled.button<IsCurrentType>`
		background-color: ${(props) => (props.isCurrent ? Colors.white : Colors.gray200)};
		border: 0.1rem solid ${(props) => (props.isCurrent ? Colors.gray200 : Colors.gray300)};
		color: ${(props) => (props.isCurrent ? Colors.gray900 : Colors.gray500)};
		box-sizing: border-box;
		position: relative;
		padding: 0rem 1.6rem;
		padding-right: 1rem;
		border-radius: 0.8rem;
		width: 17.4rem;
		height: 4.8rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		span:first-child {
			width: 100%;
			white-space: nowrap;
			max-width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		span,
		svg {
			cursor: pointer;
		}

		svg {
			position: relative;
			top: 0.1rem;
		}
	`;
}
