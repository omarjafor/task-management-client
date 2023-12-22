import { useEffect, useState } from "react";
import useTasks from "../../../Hooks/useTasks";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";


const ListTask = () => {
    const [myTasks, isLoading, refetch] = useTasks();
    const [todos, setTodos] = useState([]);
    const [onGoing, setonGoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect( () => {
        const onlyTodos = myTasks?.filter(task => task.status === 'todo');
        const onlyOnGoing = myTasks?.filter(task => task.status === 'onGoing');
        const onlyCompleted = myTasks?.filter(task => task.status === 'completed');

        setTodos(onlyTodos);
        setonGoing(onlyOnGoing);
        setCompleted(onlyCompleted);
    } , [myTasks])

    const statuses = ['todo', 'onGoing', 'completed'];

    return (
        <div className="flex gap-14 justify-center">
            {
                statuses.map((status, index) => ( <Section 
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

    if(status === 'onGoing'){
        text = 'On Going'
        bg = 'bg-purple-500'
        tasksToMap = onGoing
    }

    if (status === 'completed') {
        text = 'Completed'
        bg = 'bg-green-500'
        tasksToMap = completed
    }

    const addItemToSection = id => {
        console.log('dropped', id, status);
    }
    return(
        <div ref={drop} 
        className={`w-64 rounded-md p-2 ${isOver ? 'bg-teal-200':''}`}>
        <Header text={text} bg={bg} count={tasksToMap?.length} />
        {
            tasksToMap?.length > 0 && tasksToMap?.map(task => <TaskCard task={task} key={task._id} />)
        }
        </div>
    )
}

const Header = ({text, bg, count}) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}
            <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
                {count}
            </div>
        </div>
    );
}