import {useReducer} from "react";
import taskReducer from "./reducer";
import initialTasks from "./initialTasks";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function ToDoApp(){
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function addedTask(name){
        dispatch({
            type: "added",
            id: initialTasks.length + 1,
            name: name
        })
    }

    function updatedTask(task){
        dispatch({
            type: "updated",
            task: task
        })
    }

    function deletedTask(taskId){
        dispatch({
            type: "deleted",
            id: taskId,
        })
    }

    return (
        <div>
            <h1>Task List</h1>
            <AddTask onAddTask={addedTask} />
            <TaskList tasks={tasks} onChangeTask={updatedTask} onDeleteTask={deletedTask} />
        </div>
    );
}

export default ToDoApp;