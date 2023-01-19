import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';

export default function NewPageButtons({ page, onPrevPage, onNextPage }: NewPageButtonsProps) {
	return (
		<S.Container>
			<NewPageButton label='이전' onClick={onPrevPage} isLeft isHidden={page === -1} />
			<NewPageButton label='다음' onClick={onNextPage} isRight isHidden={false} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		justify-content: space-between;
	`;
}
