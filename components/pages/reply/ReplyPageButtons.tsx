import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';
import useApplication from '../../../hooks/useApplication';

export default function ReplyPageButtons({ page, onPrevPage, onNextPage }: NewPageButtonsProps) {
	const { application } = useApplication();

	return (
		<S.Container>
			<NewPageButton label='이전' onClick={onPrevPage} isLeft isHidden={page === -1} />
			<NewPageButton
				label='다음'
				onClick={onNextPage}
				isRight
				isHidden={application.data.forms.length - 1 === page}
			/>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		justify-content: space-between;
	`;
}
