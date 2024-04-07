
import { useQuery } from '@tanstack/react-query';
import APIClient from "../services/api-client";

interface UserResponse {
    email: string;
    first_name: string;
    last_name: string;
}

const initialData: UserResponse = {
    email: '',
    first_name: '',
    last_name: '',
}

const useUser = () => {
    const userService = new APIClient<UserResponse>('/user');

    return useQuery({
        queryKey: ['user'],
        queryFn: userService.getAll,
        initialData,
    })
};

export default useUser;