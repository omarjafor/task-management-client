import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useTasks = () => {

    const { user, loading } = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: myTasks, isLoading, refetch } = useQuery({
        queryKey: [ 'myTask', user?.email ],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user?.email}`);
            return res.data;
        }
    })

    return [myTasks, isLoading, refetch];
};

export default useTasks;