import { svgEntireCheckbox } from '../../styles/svgs';
import { SC } from '../../styles/styled';
import useUniqueId from '../../hooks/useUniqueId';

export default function ReplyCheckInput({ label }: ReplyCheckInputProps) {
	const id = useUniqueId();

	return (
		<SC.ReplySelectInputContainer>
			<input type='checkbox' id={id} />
			<label htmlFor={id}>
				{svgEntireCheckbox}
				<p>{label}</p>
			</label>
		</SC.ReplySelectInputContainer>
	);
}
