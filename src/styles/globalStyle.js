import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	html {
		box-sizing: border-box;
	}

	*, *::after, *::before {
		box-sizing: inherit;
	}
	
	body {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.darkGrey};
		letter-spacing: -0.02em;
	}

	a, button {
		font-family: 'Montserrat', sans-serif;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}

	

	h1,h2,h3,h4,h5,h6 {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	
	.container {
		width: 1000px;
		margin: 100px auto 0 auto;
	}

	.row {
		padding: 10px;
		border-bottom: 1px solid silver;
		list-style: none;
	}

`;

export const chooseFont = (value = '"Montserrat", sans-serif') => `
	font-family: ${value};
`;
