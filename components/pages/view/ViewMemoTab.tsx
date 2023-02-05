import ViewMemoInput from '../../inputs/ViewMemoInput';
import ViewComment from './ViewComment';
import ViewCommentBox from './ViewCommentBox';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';

export default function ViewMemoTab() {
	const [memo, onChangeMemo] = useInput();

	return (
		<S.Container>
			<ViewCommentBox>
				<ViewComment
					name={'linko'}
					content={
						'좋은 거 같아요! 아무말 아면접 관련 내용 여기다가 적을 거에요! 면접 질문, 의사 소통, 등'
					}
					isMine={false}
				/>
				<ViewComment name={'nyang'} content={'면접 질문 : 나이가 어떻게 되시나요?'} isMine={true} />
				<ViewComment
					name={'ruby'}
					content={'면접 질문 : 지원 동기를 말씀해주세요.'}
					isMine={false}
				/>
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
				<ViewComment name={'ruby'} content={'나름 괜찮은데요?'} isMine={false} />
			</ViewCommentBox>
			<ViewMemoInput value={memo} onChange={onChangeMemo} onSubmit={() => alert('메모등록')} />
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
