import { svgEntireCheckbox } from '../../styles/svgs';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Colors } from '../../styles/colors';

export default function ReplyCheckInput({ label, questionIdx, optionIdx }: ReplyCheckInputProps) {
	const [id, setId] = useState('');

	const onChangeIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
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
				type='checkbox'
				id={id}
				// checked={true}
				// checked={isFixed ? isFixed : newApplication.essentialQuestionIds.includes(essentialIdx)}
				// onChange={onChangeIsChecked}
			/>
			<label htmlFor={id}>
				{svgEntireCheckbox}
				<p>{label}</p>
			</label>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.button`
		* {
			cursor: pointer;
		}

		> input {
			display: none;
		}

		/* Default */
		svg {
			> path:nth-of-type(2),
			> path:nth-of-type(3) {
				fill: transparent;
			}

			path {
				transition: 0.3s ease;
			}
		}

		/* Checked */
		> input:checked + label > svg {
			> path:nth-of-type(1),
			> path:nth-of-type(2) {
				fill: ${Colors.blue500};
			}

			> path:nth-of-type(3) {
				fill: ${Colors.white};
			}
		}

		> label {
			display: flex;
			align-items: center;
			gap: 0.97rem;
		}
	`;
}
