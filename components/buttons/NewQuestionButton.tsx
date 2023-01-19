import { useState } from 'react';
import styled from 'styled-components';
import { svgCheckBox, svgCirclePlus, svgPencil, svgTick } from '../../styles/svgs';
import DropDown from '../dropdowns/DropDown';
import { QuestionLabels } from '../../constants/questionTypes';

export default function NewQuestionButton({
	onCreateTextQuestion,
	onCreateSingleSelectQuestion,
	onCreateMultiSelectQuestion,
}: NewQuestionButtonProps) {
	const [showMenu, setShowMenu] = useState(false);

	const onClick = () => setShowMenu(true);
	const onBlur = () => setShowMenu(false);

	return (
		<S.Button onClick={onClick} onBlur={onBlur}>
			{svgCirclePlus}
			{showMenu && (
				<DropDown
					svg1={svgPencil}
					svg2={svgTick}
					svg3={svgCheckBox}
					option1={QuestionLabels[1]}
					option2={QuestionLabels[2]}
					option3={QuestionLabels[3]}
					onClick1={onCreateTextQuestion}
					onClick2={onCreateSingleSelectQuestion}
					onClick3={onCreateMultiSelectQuestion}
				/>
			)}
		</S.Button>
	);
}

namespace S {
	export const Button = styled.button`
		margin: 0 auto;
		margin-top: 2.52rem;
		display: flex;
		position: relative;
	`;
}
