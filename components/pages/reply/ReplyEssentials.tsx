import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import ReplyRadioInput from '../../inputs/ReplyRadioInput';
import ReplyTextInput from '../../inputs/ReplyTextInput';

export default function ReplyEssentials() {
	return (
		<S.Container>
			<h1>지원자 정보</h1>
			<div>
				<h2>기본정보</h2>
				<ReplyTextInput label={'이름'} questionId={0} errorMessage={''} />
				<ReplyTextInput label={'이메일'} questionId={0} errorMessage={''} />
				<ReplyTextInput
					label={'전화번호(‘-’없이 입력해 주세요)'}
					questionId={0}
					errorMessage={''}
				/>
			</div>
			<div>
				<h2>성별</h2>
				<ReplyRadioInput
					label={'남성'}
					questionId={0}
					errorMessage={''}
					optionIdx={0}
					name={'gender'}
				/>
				<ReplyRadioInput
					label={'여성'}
					questionId={0}
					errorMessage={''}
					optionIdx={0}
					name={'gender'}
				/>
			</div>
			<div>
				<h2>생년월일</h2>
				<ReplyTextInput label={'생년월일'} questionId={0} errorMessage={''} />
			</div>
			<div>
				<h2>학적</h2>
				<ReplyTextInput label={'소속 학교'} questionId={0} errorMessage={''} />
				<ReplyTextInput label={'소속 과'} questionId={0} errorMessage={''} />
				<ReplyTextInput label={'학번'} questionId={0} errorMessage={''} />
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
