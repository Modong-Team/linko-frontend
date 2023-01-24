import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { svgRadioQuestion } from '../../styles/svgs';
import { v4 as uuid } from 'uuid';
import { SC } from '../../styles/styled';

export default function ReplyRadioInput({
	label,
	questionId,
	optionIdx,
	name,
}: ReplyRadioInputProps) {
	const [id, setId] = useState('');

	const onChangeIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.checked);
		// const isChecked = e.target.checked;
		// if (isChecked) onAddNewApplicationEssentials(essentialIdx);
		// if (!isChecked) onRemoveNewApplicationEssentials(essentialIdx);
	};

	useEffect(() => {
		setId(uuid());
	}, []);

	return (
		<S.Container>
			<input
				type='radio'
				id={id}
				name={name}
				// checked={true}
				// checked={isFixed ? isFixed : newApplication.essentialQuestionIds.includes(essentialIdx)}
				onChange={onChangeIsChecked}
			/>
			<label htmlFor={id}>
				{svgRadioQuestion}
				<p>{label}</p>
			</label>
		</S.Container>
	);
}

namespace S {
	export const Container = styled(SC.ReplySelectInputContainer)`
		/* Default */
		svg > path:nth-of-type(2) {
			fill: white !important;
		}

		> label {
			gap: 0.88rem !important;
		}
	`;
}
