import { svgEntireCheckbox } from '../../styles/svgs';
import { SC } from '../../styles/styled';
import useUniqueId from '../../hooks/useUniqueId';

export default function ReplyCheckInput({ label, questionId, optionIdx }: ReplyCheckInputProps) {
	const id = useUniqueId();

	const onChangeIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		// const isChecked = e.target.checked;
		// if (isChecked) onAddNewApplicationEssentials(essentialIdx);
		// if (!isChecked) onRemoveNewApplicationEssentials(essentialIdx);
	};

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
