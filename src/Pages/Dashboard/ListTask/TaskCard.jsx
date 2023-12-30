import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useTasks from "../../../Hooks/useTasks";
import { useDrag } from "react-dnd";
import { useForm } from "react-hook-form";
import { useState } from "react";

const TaskCard = ({ task }) => {
    const axiosPublic = useAxiosPublic();
    const [, , refetch] = useTasks();
    const [showModal, setShowModal] = useState(false);

    const { _id, name, deadline, priority, description, status } = task || {};

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: _id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const { register, handleSubmit, reset } = useForm()

    const handleUpdate = () => {
        setShowModal(true);
    }

    const onSubmit = async (data) => {
        const updateData = {
            name: data.name,
            deadline: data.deadline,
            priority: data.priority,
            description: data.description,
        }
        console.log(updateData);
        const toastId = toast.loading('Your Profile Updating....')
        setShowModal(false);
        const updateRes = await axiosPublic.put(`/tasks/${_id}`, updateData);
        if (updateRes.data.modifiedCount > 0) {
            refetch();
            reset();
            toast.success(`${data.name} is Updated`, { id: toastId });
        } else {
            toast.error(`${data.name} is Not Updated`, { id: toastId });
        }
    };

    const handleRemove = id => {
        const toastId = toast.loading('Your Task Deleting....')
        axiosPublic.delete(`/tasks/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success('Your Task is Deleted', { id: toastId });
                }
            })
    }

    return (
        <div ref={drag} className={isDragging ? 'opacity-20' : 'opacity-100'}>
            <div className="my-5 p-2 border border-teal-400 rounded-lg shadow-lg">
                <dd className="font-bold"> {name} - {priority}</dd>
                <div className="flex justify-between">
                    <dd className="font-medium"> {status} </dd>
                    <dd className="font-medium"> {deadline} </dd>
                </div>
                <dd className="font-sm text-sm"> {description}</dd>
                <div className="mt-6 flex justify-evenly items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                            className="h-4 w-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                        </svg>
                        <button onClick={handleUpdate}
                        className="p-2 border rounded-md shadow-md">
                            Update
                        </button>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                            className="h-4 w-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                        </svg>

                        <button onClick={() => handleRemove(_id)}
                        className="p-2 border rounded-md shadow-md">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;