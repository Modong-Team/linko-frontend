import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';
import useApplication from '../../../hooks/useApplication';
import useAnswers from '../../../hooks/useAnswers';
import { postApplicant } from '../../../api/applicant';

export default function ReplyPageButtons({ page, onPrevPage, onNextPage }: NewPageButtonsProps) {
	const { answers } = useAnswers();
	const { application } = useApplication();

	const checkIsLastPage = () => application.data.forms.length - 1 === page;

	const onSubmit = async () => {
		const post = await postApplicant(answers);
		console.log(post);
	};

	return (
		<S.Container>
			<NewPageButton label='이전' onClick={onPrevPage} isLeft isHidden={page === -1} />
			<NewPageButton
				label={checkIsLastPage() ? '지원서 제출' : '다음'}
				onClick={checkIsLastPage() ? onSubmit : onNextPage}
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
