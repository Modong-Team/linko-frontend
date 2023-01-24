import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyCheckInput from '../../inputs/ReplyCheckInput';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';

export default function ReplyForms() {
	return (
		<S.Container>
			<h1>섹션 제목</h1>
			<div>
				<h2>텍스트질문</h2>
				<ReplyTextInput label={'답변'} questionId={0} errorMessage={''} />
			</div>
			<div>
				<h2>단일선택질문</h2>
				<ReplyRadioInput
					label={'단일선택예시1'}
					questionId={0}
					errorMessage={''}
					optionIdx={0}
					name={'test'}
				/>
				<ReplyRadioInput
					label={'단일선택예시1'}
					questionId={0}
					errorMessage={''}
					optionIdx={0}
					name={'test'}
				/>
			</div>
			<div>
				<h2>다중선택질문</h2>
				<ReplyCheckInput label={'다중선택예시1'} questionId={0} errorMessage={''} optionIdx={0} />
				<ReplyCheckInput label={'다중선택예시2'} questionId={0} errorMessage={''} optionIdx={0} />
				<ReplyCheckInput label={'다중선택예시3'} questionId={0} errorMessage={''} optionIdx={0} />
				<ReplyCheckInput label={'다중선택예시4'} questionId={0} errorMessage={''} optionIdx={0} />
				<ReplyCheckInput label={'다중선택예시5'} questionId={0} errorMessage={''} optionIdx={0} />
			</div>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		> h1 {
			${Fonts.heading24bold}
			margin-bottom: 3.2rem;
		}

		> div > h2 {
			${Fonts.heading20bold}
			margin-bottom: 1.5rem;
		}

		> div:not(:last-of-type) {
			margin-bottom: 4rem;
		}
	`;
}
