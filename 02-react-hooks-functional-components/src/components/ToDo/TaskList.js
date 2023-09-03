import { useState } from "react";

function TaskList({ tasks, onChangeTask, onDeleteTask }){
    return (
        tasks.map((task) => (
            <Task task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
        ))        
    );
}

function Task({ task, onChangeTask, onDeleteTask }){
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;

    if(isEditing){
        taskContent = (
            <div>
                <input value={task.name} onChange={(e) => {
                    onChangeTask({
                        ...task,
                        name: e.target.value
                    })
                }} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </div>
        );
    }else{
        taskContent = (
            <div>
                {task.name}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        );
    }

    return (
        <label>
            {taskContent}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </label>
    );
}

export default TaskList;