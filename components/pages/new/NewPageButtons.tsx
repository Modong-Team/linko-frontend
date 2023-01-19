import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';
import useForms from '../../../hooks/useForms';

export default function NewPageButtons({ page, onPrevPage, onNextPage }: NewPageButtonsProps) {
	const { forms, onRequestCreateForm } = useForms();

	const onCreateNewFormAndRouteToNextPage = () => {
		onRequestCreateForm();
		onNextPage();
	};

	return (
		<S.Container>
			<NewPageButton label='이전' onClick={onPrevPage} isLeft isHidden={page === -1} />
			<NewPageButton
				label={page !== forms.length - 1 ? '다음' : '페이지 추가'}
				onClick={page !== forms.length - 1 ? onNextPage : onCreateNewFormAndRouteToNextPage}
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
