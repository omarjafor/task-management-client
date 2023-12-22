import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import CreateTask from "./CreateTask/CreateTask";
import ListTask from "./ListTask/ListTask";

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <Helmet>
                <title> Taskify Pro | Dashboard </title>
            </Helmet>
            <div className="text-center items-center mx-auto py-3">
                <img src={user?.photoURL} alt="" className="h-40 mx-auto" />
            </div>
            <div className="text-center mb-4 items-center mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, {user?.displayName} !
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                    Let&apos;s manage your all the Tasks Here 🎉
                </p>
            </div>
            <CreateTask></CreateTask>
            <ListTask></ListTask>
        </div>
    );
};

export default Dashboard;