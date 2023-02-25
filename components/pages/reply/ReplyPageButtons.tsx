import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';
import useApplication from '../../../hooks/useApplication';
import useAnswers from '../../../hooks/useAnswers';
import { postApplicant } from '../../../api/applicant';
import SubmitModal from '../../modals/SubmitModal';
import { useState, useEffect } from 'react';
import { Paths } from '../../../constants/paths';
import { useRouter } from 'next/router';
import useLoadingStatus from '../../../hooks/useLoadingStatus';

export default function ReplyPageButtons({
	page,
	onPrevPage,
	onNextPage,
	isNextButtonDisabled,
}: NewPageButtonsProps) {
	const router = useRouter();
	const { answers } = useAnswers();
	const { application } = useApplication();
	const [isHideModal, setIsHideModal] = useState(true);
	const { onStartGlobalLoading, onFinishGlobalLoading } = useLoadingStatus();

	const checkIsLastPage = () => application && application.data.forms.length - 1 === page;

	const onSubmit = () => setIsHideModal(false);

	const onConfirm = async () => {
		onStartGlobalLoading();
		try {
			const post = await postApplicant(answers);
			const applicantId = post.data.id;
			router.push(Paths.replyComplete + '/' + applicantId);
		} catch (e) {
			console.log(e);
		} finally {
			onFinishGlobalLoading();
			setIsHideModal(true);
		}
	};

	useEffect(() => {
		return () => {
			setIsHideModal(true);
			onFinishGlobalLoading();
		};
	}, []);

	return (
		<S.Container>
			<NewPageButton label='이전' onClick={onPrevPage} isLeft isHidden={page === -1} />
			<NewPageButton
				label={checkIsLastPage() ? '지원서 제출' : '다음'}
				onClick={checkIsLastPage() ? onSubmit : onNextPage}
				isRight
				isHidden={false}
				disabled={isNextButtonDisabled}
			/>
			<SubmitModal
				title={'지원서를 제출할까요?'}
				description={'제출한 지원서는 수정이 불가능해요.'}
				onCancel={() => setIsHideModal(true)}
				onConfirm={onConfirm}
				isHidden={isHideModal}
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
