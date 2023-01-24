import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';
import useApplication from '../../../hooks/useApplication';

export default function ReplyPageButtons({ page, onPrevPage, onNextPage }: NewPageButtonsProps) {
	const { application } = useApplication();

	const checkIsLastPage = () => application.data.forms.length - 1 === page;

	return (
		<S.Container>
			<NewPageButton label='이전' onClick={onPrevPage} isLeft isHidden={page === -1} />
			<NewPageButton
				label={checkIsLastPage() ? '지원서 제출' : '다음'}
				onClick={checkIsLastPage() ? console.log : onNextPage}
				isRight
				isHidden={false}
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
