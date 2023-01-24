import { svgEntireCheckbox } from '../../styles/svgs';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { SC } from '../../styles/styled';

export default function ReplyCheckInput({ label, questionId, optionIdx }: ReplyCheckInputProps) {
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
		<SC.ReplySelectInputContainer>
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
		</SC.ReplySelectInputContainer>
	);
}
