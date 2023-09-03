const taskReducer = (tasks, action) => {
    console.log(tasks);
    console.log(action);
    
    switch(action.type){
        case 'added': {
            return [...tasks, {
                id: action.id,
                name: action.name
            }]
        }
        case 'updated': {
            return tasks.map((task) => {
                if(task.id === action.task.id){
                    return action.task;
                }else{
                    return task;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

export default taskReducer;