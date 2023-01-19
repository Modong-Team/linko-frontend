import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { svgEntireCheckbox } from '../../styles/svgs';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import { css } from 'styled-components';
import useNewApplication from '../../hooks/useNewApplication';

export default function EssentialCheckInput({
	label,
	isFixed,
	essentialIdx,
}: EssentialCheckInputProps) {
	const [id, setId] = useState('');
	const { newApplication, onAddNewApplicationEssentials, onRemoveNewApplicationEssentials } =
		useNewApplication();

	const onChangeIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		if (isChecked) onAddNewApplicationEssentials(essentialIdx);
		if (!isChecked) onRemoveNewApplicationEssentials(essentialIdx);
	};

	useEffect(() => {
		setId(uuid());
	}, []);

	return (
		<S.Container isFixed={isFixed}>
			<input
				type='checkbox'
				id={id}
				checked={isFixed ? isFixed : newApplication.essentialQuestionIds.includes(essentialIdx)}
				onChange={onChangeIsChecked}
			/>
			<label htmlFor={id}>
				{svgEntireCheckbox}
				<p>{label}</p>
			</label>
		</S.Container>
	);
}

namespace S {
	export const Container = styled.div<IsFixedType>`
		> input {
			display: none;
		}

		/* Default */
		svg {
			> path:nth-of-type(2),
			> path:nth-of-type(3) {
				fill: transparent;
			}
		}

		> label {
			border: 0.1rem solid ${Colors.gray200};
			padding: 1.2rem 2.1rem;
			border-radius: 0.8rem;
			gap: 1.15rem;

			/* Hover */
			&:hover {
				border-color: ${Colors.gray300};
				background-color: ${Colors.gray100};

				svg > path:nth-of-type(2) {
					fill: ${Colors.gray300};
				}
			}

			&,
			svg {
				display: flex;
				align-items: center;
				cursor: pointer;
			}

			&,
			path {
				transition: 0.3s ease;
			}

			> p {
				${Fonts.subtitle16semibold}
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

		${(props) => props.isFixed && FixedStyle}
	`;

	export const FixedStyle = css`
		pointer-events: none;

		/* Checked */
		> input:checked + label > svg {
			> path:nth-of-type(1),
			> path:nth-of-type(3) {
				fill: ${Colors.gray500};
			}

			> path:nth-of-type(2) {
				fill: ${Colors.white};
			}
		}
	`;
}
