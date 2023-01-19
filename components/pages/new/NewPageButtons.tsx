import styled from 'styled-components';
import NewPageButton from '../../buttons/NewPageButton';

export default function NewPageButtons() {
	return (
		<S.Container>
			<NewPageButton label='이전' onClick={console.log} isLeft isHidden={false} />
			<NewPageButton label='다음' onClick={console.log} isRight isHidden={false} />
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div`
		display: flex;
		justify-content: space-between;
	`;
}
