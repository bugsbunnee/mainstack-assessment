import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
		],
	},
]);

export default router;
