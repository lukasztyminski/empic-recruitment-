export const formatPrice = (price) => price.toString().replace('.', ',');

export const mixinFlex = (direction = 'row', align = 'flex-start', justify = 'flex-start') => `
	display: flex;
	flex-direction: ${direction};
	align-items: ${align};
	justify-content: ${justify};
`;
