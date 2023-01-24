import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { svgEntireCheckbox, svgRadioQuestion } from '../../styles/svgs';
import { v4 as uuid } from 'uuid';
import { Colors } from '../../styles/colors';

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
	export const Container = styled.div`
		&:not(:last-of-type) {
			margin-bottom: 2rem;
		}

		* {
			cursor: pointer;
		}

		> input {
			display: none;
		}

		/* Default */
		svg > path {
			transition: 0.3s ease;
		}

		/* Checked */
		> input:checked + label > svg {
			> path:nth-of-type(1) {
				fill: ${Colors.blue500};
			}
		}

		> label {
			display: flex;
			align-items: center;
			gap: 0.88rem;
		}
	`;
}
