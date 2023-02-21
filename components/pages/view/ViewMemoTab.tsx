import ViewMemoInput from '../../inputs/ViewMemoInput';
import ViewComment from './ViewComment';
import ViewCommentBox from './ViewCommentBox';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import { useState, useEffect } from 'react';
import useApplicantId from '../../../hooks/useApplicantId';
import useGet from '../../../hooks/useGet';
import { getMemos, postMemo } from '../../../api/memo';
import useLocalLoading from '../../../hooks/useLocalLoading';
import useAuthData from '../../../hooks/useAuthData';
import useTriggers from '../../../hooks/useTriggers';

export default function ViewMemoTab() {
	const [memo, onChangeMemo, onResetMemo] = useInput();
	const [memos, setMemos] = useState<ResponseMemo.Get>();
	const { applicantId } = useApplicantId();
	const { authData } = useAuthData();
	const { isLocalLoading, onStartLocalLoading, onFinishLocalLoading } = useLocalLoading();
	const { triggers, onTriggerRefreshMemos } = useTriggers();

	const checkIfMemoExist = () => !!memos?.data.length;

	const onSubmit = async () => {
		if (applicantId) {
			const post = await postMemo({ applicantId, content: memo });
			onResetMemo();
			onTriggerRefreshMemos();
		}
	};

	useEffect(() => {
		if (applicantId) {
			onStartLocalLoading();
			useGet(() => getMemos(applicantId), setMemos, onFinishLocalLoading);
		}
	}, [applicantId, triggers.memos]);

	return (
		<S.Container>
			<ViewCommentBox>
				{checkIfMemoExist() ? (
					memos?.data.map((memo, i) => (
						<ViewComment
							name={memo.writerName}
							content={memo.content}
							isMine={memo.creatorId === authData?.memberId}
							key={i}
						/>
					))
				) : (
					<p>아무도 메모를 남기지 않았어요.</p>
				)}
			</ViewCommentBox>
			<ViewMemoInput value={memo} onChange={onChangeMemo} onSubmit={onSubmit} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		flex-direction: column;
		overflow: hidden;
	`;
}
