import Task from '../../models/task';

export const DELETE_TASK = 'DELETE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASKS = 'SET_TASKS';


export const fetchTasks = () => {
    return async dispatch => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/tasks.json');
        const resData = await response.json();
        const loadedTasks = [];
        for (const key in resData ) {
            loadedTasks.push(new Task(
                key,
                resData[key].sprintId,
                resData[key].title,
                resData[key].description,
                resData[key].start,
                resData[key].end
                )
            );
        }
        dispatch ({type: SET_TASKS, tasks:  loadedTasks });
    };
};


export const deleteTask = taskId => {
    return async dispatch => {
        await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`, {
           method: 'DELETE',
       });
    dispatch ({type: DELETE_TASK, tid: taskId });    
  };
};


export const createTask = (sprintId, title, description) => {
    return async dispatch => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sprintId,
                title,
                description
            })
        });     
        
        const resData = await response.json();

        dispatch({
            type: CREATE_TASK, taskData: { taskId: resData.name, sprintId, title, description }
        });
    };
 };
    


