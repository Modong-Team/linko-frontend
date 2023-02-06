import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { svgPreview } from '../../../styles/svgs';

export default function ClubLogoPreview({ file }: ClubLogoPreviewProps) {
	const [src, setSrc] = useState('');

	useEffect(() => {
		if (file) {
			const src = URL.createObjectURL(file);
			setSrc(src);
		} else setSrc('');
	}, [file]);

	return <S.Container>{src ? <img src={src} /> : svgPreview}</S.Container>;
}

namespace S {
	export const Container = styled.div`
		width: 9.6rem;
		height: 9.6rem;
		border-radius: 50%;
		background-color: ${Colors.blue100};
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;
}
