import { useEffect, useState } from "react";
import useTasks from "../../../Hooks/useTasks";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";


const ListTask = () => {
    const [myTasks] = useTasks();
    const [todos, setTodos] = useState([]);
    const [onGoing, setonGoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const search = useSelector(state => state.search.search);

    useEffect(() => {
        const onlyTodos = myTasks?.filter(task => task.status === 'todo' && task.name.toLowerCase().includes(search.toLowerCase()));
        const onlyOnGoing = myTasks?.filter(task => task.status === 'onGoing' && task.name.toLowerCase().includes(search.toLowerCase()));
        const onlyCompleted = myTasks?.filter(task => task.status === 'completed' && task.name.toLowerCase().includes(search.toLowerCase()));

        setTodos(onlyTodos);
        setonGoing(onlyOnGoing);
        setCompleted(onlyCompleted);
    }, [myTasks, search])

    const statuses = ['todo', 'onGoing', 'completed'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto justify-items-center">
            {
                statuses.map((status, index) => (<Section
                    key={index}
                    status={status}
                    todos={todos}
                    onGoing={onGoing}
                    completed={completed}
                ></Section>))
            }
        </div>
    );
};

export default ListTask;

const Section = ({ status, todos, onGoing, completed }) => {
    const [, , refetch] = useTasks();
    const axiosPublic = useAxiosPublic();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isDragging: !!monitor.isOver()
        })
    }))

    let text = 'Todo';
    let bg = 'bg-slate-500';
    let tasksToMap = todos

    if (status === 'onGoing') {
        text = 'On Going'
        bg = 'bg-purple-500'
        tasksToMap = onGoing
    }

    if (status === 'completed') {
        text = 'Completed'
        bg = 'bg-green-500'
        tasksToMap = completed
    }

    const addItemToSection = async (id) => {
        const toastId = toast.loading('Your Task is Updating....')
        const updateData = { status }
        const updateRes = await axiosPublic.patch(`/tasks/${id}`, updateData);
        if (updateRes.data.modifiedCount > 0) {
            refetch();
            toast.success(`Task Updated`, { id: toastId });
        } else {
            toast.error(`Task Not Updated`, { id: toastId });
        }
    }
    return (
        <div ref={drop}
            className={`w-64 rounded-md p-2 ${isOver ? 'bg-teal-200' : ''}`}>
            <Header text={text} bg={bg} count={tasksToMap?.length} />
            {
                tasksToMap?.length > 0 && tasksToMap?.map(task => <TaskCard task={task} key={task._id} />)
            }
        </div>
    )
}

const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}
            <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
                {count}
            </div>
        </div>
    );
}