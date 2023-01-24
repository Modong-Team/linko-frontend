import { svgEntireCheckbox } from '../../styles/svgs';
import { SC } from '../../styles/styled';
import useUniqueId from '../../hooks/useUniqueId';

export default function ReplyCheckInput({ onChange, label, isChecked }: ReplyCheckInputProps) {
	const id = useUniqueId();

	return (
		<SC.ReplySelectInputContainer>
			<input type='checkbox' id={id} onChange={onChange} checked={isChecked} />
			<label htmlFor={id}>
				{svgEntireCheckbox}
				<p>{label}</p>
			</label>
		</SC.ReplySelectInputContainer>
	);
}
