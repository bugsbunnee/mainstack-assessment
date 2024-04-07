import React from 'react';
import ReactDOM from 'react-dom/client';

import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import router from './utils/routes.tsx';
import theme from './utils/theme.tsx';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'bottom' } }}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
