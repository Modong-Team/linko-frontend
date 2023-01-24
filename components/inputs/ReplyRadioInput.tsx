import styled from 'styled-components';
import { svgRadioQuestion } from '../../styles/svgs';
import { SC } from '../../styles/styled';
import useUniqueId from '../../hooks/useUniqueId';

export default function ReplyRadioInput({ onChange, label, name }: ReplyRadioInputProps) {
	const id = useUniqueId();

	return (
		<S.Container>
			<input type='radio' id={id} name={name} onChange={onChange} />
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
