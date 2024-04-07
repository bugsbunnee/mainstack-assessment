import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
};

const theme = extendTheme({
	config,
	colors: {
        black: {
            300: '#131316'
        },
		gray: {
			50: '#f9f9f9',
			100: '#EFF1F6',
			200: '#d3d3d3',
			300: '#888F95',
			400: '#56616B',
			500: '#898989',
			600: '#6c6c6c',
			700: '#202020',
			800: '#121212',
			900: '#131316',
		},
		blue: {
			100: '#1976d2',
		},
		red: {
			700: '#ab3c3c',
		},
		error: {
			100: 'tomato',
		},
	},
	fonts: {
		heading: `'Urbanist', sans-serif`,
		body: `'Urbanist', sans-serif`,
	},
});

export default theme;
