import { useEffect, useState } from "react";
import useTasks from "../../../Hooks/useTasks";
import TaskCard from "./TaskCard";


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

    return(
        <div className={`w-64`}>
        <Header text={text} bg={bg} count={tasksToMap?.length} />
        {
            tasksToMap.length > 0 && tasksToMap.map(task => <TaskCard task={task} key={task._id} />)
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