import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import useTasks from "../../../Hooks/useTasks";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/SearchSlice";


const CreateTask = () => {
    const { user } = useAuth();
    const [, , refetch] = useTasks();
    const dispatch = useDispatch();

    const axiosPublic = useAxiosPublic();
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset } = useForm()

    const handleTask = () => {
        setShowModal(true);
    }

    const onSubmit = async (data) => {
        const taskData = {
            name: data.name,
            deadline: data.deadline,
            priority: data.priority,
            description: data.description,
            email: user?.email,
            status: 'todo'
        }
        console.log(taskData);
        const toastId = toast.loading('Your Task Creating....')
        setShowModal(false);
        const taskRes = await axiosPublic.post(`/tasks`, taskData);
        if (taskRes.data.insertedId) {
            refetch();
            reset();
            toast.success(`${data.name} Task Created Successful`, { id: toastId });
        } else {
            toast.error(`${data.name} Task Not Created`, { id: toastId });
        }
    };

    return (
        <div>
            <div className="my-4 space-y-2 mx-auto">
                <div>
                    <input type="search" name="search" id="" placeholder="Search here" autoComplete="off" onChange={(e) => dispatch(setSearch(e.target.value))} className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-2/3 lg:w-[25vw]' />
                </div>
                <button onClick={handleTask} className="p-3 font-bold text-white rounded-lg bg-blue-600 mb-2 mx-auto">
                    Create Task
                </button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <h3 className="text-xl py-2 font-bold bg-blue-400">
                                    Create Your Task
                                </h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="mx-12">
                                    <div className="form-control flex my-6 w-full justify-between items-center justify-items-center">
                                        <label className="label w-2/5 text-left">
                                            <span className="label-text font-medium">Task Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Task Name"
                                            {...register('name', { required: true })}
                                            required
                                            className="input input-bordered w-3/5 ml-5 p-2" />
                                    </div>
                                    <div className="form-control flex my-6 w-full justify-between items-center justify-items-center">
                                        <label className="label w-2/5 text-left">
                                            <span className="label-text font-medium">Deadline</span>
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="Deadline Here"
                                            {...register('deadline', { required: true })}
                                            required
                                            className="input input-bordered w-3/5 ml-5 p-2" />
                                    </div>
                                    <div className="form-control flex my-6 w-full justify-between items-center justify-items-center">
                                        <label className="label w-2/5 text-left">
                                            <span className="label-text font-medium">Task Priority</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Task Priority"
                                            {...register('priority', { required: true })}
                                            required
                                            className="input input-bordered w-3/5 ml-5 p-2" />
                                    </div>
                                    <div className="my-6 w-full items-center justify-items-center">
                                        <label className="label w-2/5 py-3 text-left">
                                            <span className="label-text font-medium">Task Description</span>
                                        </label>
                                        <textarea {...register('description')} className="textarea textarea-bordered h-32 w-4/5 mt-4 p-2" placeholder="Your Task Description type here"></textarea>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Create Task
                                        </button>
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default CreateTask;