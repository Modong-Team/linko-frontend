const BreakPoints = {
	small: '1280px',
	medium: '1440px',
	large: '1920px',
} as const;

export const Media = {
	small: `@media (max-width: ${BreakPoints.small}), (max-height:990px)`,
	medium: `@media (min-width: ${BreakPoints.medium})`,
	large: `@media (min-width: ${BreakPoints.large})`,
} as const;
