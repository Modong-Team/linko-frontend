import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Media } from '../../../styles/breakPoints';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgLeft16, svgRight16 } from '../../../styles/svgs';

export default function MainPageButtons({
	currentPage,
	totalPages,
	onChangePage,
}: MainPageButtonsProps) {
	const SIZE = 5;
	const [pages, setPages] = useState<number[]>([]);
	const [block, setBlock] = useState(1);

	const getLastBlock = () => Math.ceil(pages.length / SIZE);
	const getPagesInCurrentBlock = () => pages.slice((block - 1) * SIZE, (block - 1) * SIZE + SIZE);

	const onPrevBlock = () => {
		if (block !== 1) {
			const prevBlock = block - 1;
			const lastPageOfPrevBlock = (prevBlock - 1) * SIZE + SIZE;
			onChangePage(lastPageOfPrevBlock);
			setBlock(prevBlock);
		}
	};

	const onNextBlock = () => {
		if (block !== getLastBlock()) {
			const nextBlock = block + 1;
			const firstPageOfNextBlock = (nextBlock - 1) * SIZE + 1;
			onChangePage(firstPageOfNextBlock);
			setBlock(nextBlock);
		}
	};

	useEffect(() => {
		if (!totalPages) return;
		const pages = Array(totalPages)
			.fill(0)
			.map((_, i) => i + 1);
		setPages(pages);
	}, [totalPages]);

	return (
		<S.PageButtonsContainer>
			<S.RouteButton onClick={onPrevBlock} disabled={block === 1}>
				{svgLeft16}
			</S.RouteButton>
			{getPagesInCurrentBlock().map((page) => (
				<S.PageNumber
					isCurrent={currentPage === page}
					onClick={() => onChangePage(page)}
					key={page}>
					{page}
				</S.PageNumber>
			))}
			<S.RouteButton onClick={onNextBlock} disabled={block === getLastBlock()}>
				{svgRight16}
			</S.RouteButton>
		</S.PageButtonsContainer>
	);
}

namespace S {
	export const PageButtonsContainer = styled.div`
		padding: 2.6rem 0;
		margin-top: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;
		transition: 0.3s ease;

		${Media.small} {
			padding-top: 1.1rem;
			padding-bottom: 1.3rem;
		}
	`;

	export const RouteButton = styled.button`
		display: flex;
		align-items: center;

		:disabled {
			cursor: default;

			> svg > path {
				stroke: ${Colors.gray400};
			}
		}
	`;

	export const PageNumber = styled.div<IsCurrentType>`
		${Fonts.button14medium}
		border-radius: 0.4rem;
		width: 2.4rem;
		height: 2.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${(props) => props.isCurrent && Colors.blue500};
		border: 0.14rem solid transparent;
		border-color: ${(props) => props.isCurrent && Colors.blue500};
		cursor: pointer;
		transition: 0.3s ease;
	`;
}
