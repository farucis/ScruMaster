import Task from '../../models/task';

export const DELETE_TASK = 'DELETE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const START_TASK = 'START_TASK';
export const END_TASK = 'END_TASK'; 


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
                resData[key].priority,
                resData[key].start,
                resData[key].end
                )
            );
        }
        dispatch ({type: SET_TASKS, tasks: loadedTasks });
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


export const createTask = (sprintId, title, description, priority) => {
    return async dispatch => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sprintId,
                title,
                description,
                priority
            })
        });     
        
        const resData = await response.json();

        dispatch({
            type: CREATE_TASK, taskData: { taskId: resData.name, sprintId, title, description, priority }
        });
    };
 };
    


 export const startTask = (taskId) => {
    return async (dispatch) => {
        const start = new Date()
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({start})
            });

            dispatch({ type: START_TASK, tid:taskId,  start : start });
    };
};

export const endTask = (taskId) => {
    return async (dispatch) => {
        const end = new Date()
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({end})
            });

            dispatch({ type: END_TASK, tid:taskId, end : end });
    };
};

