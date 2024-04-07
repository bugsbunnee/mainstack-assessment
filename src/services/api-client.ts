import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 30_000,
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = () => {
		return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
	};

	get = (id: number | string) => {
		return axiosInstance
			.get<T>(this.endpoint + '/' + id)
			.then((res) => res.data);
	};

	post = <T>(data: T) => {
		return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
	};
}

export default APIClient;
