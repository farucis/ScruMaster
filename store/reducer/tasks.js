import { DELETE_TASK, CREATE_TASK, SET_TASKS, START_TASK, END_TASK} from '../action/tasks';
import Task from '../../models/task';

const initialState = {
    availableTasks: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case START_TASK:
            const taskIndex = state.availableTasks.findIndex(task => task.taskId === action.tid);
            const updatedTask = new Task(
                                        action.tid,
                                        taskIndex.sprintId,
                                        taskIndex.title,
                                        taskIndex.description,
                                        taskIndex.priority,
                                        action.start,
                                        taskIndex.priority.end,
                                        );
            const updatedT = [...state.availableTasks];
            updatedT[taskIndex ] = updatedTask;
            return {
                ...state,
                availableTasks: updatedT
            };
        case END_TASK:
            const taskIn = state.availableTasks.findIndex(task => task.taskId === action.tid);
            const updated = new Task(
                                        action.tid,   
                                        action.end,
                                        );
            const Newupdated = [...state.availableTasks];
            Newupdated[taskIn] = updated;
            return {
                ...state,
                availableTasks: Newupdated
            };
        case SET_TASKS:
            return {
                availableTasks: action.tasks,
            };
        case CREATE_TASK:
            const newTask = new Task(
                action.taskData.taskId,
                action.taskData.sprintId,
                action.taskData.title,
                action.taskData.description,
                action.taskData.priority,
                new Date().toString(),
                new Date().toString()
                );
                return {
                    ...state,
                    availableTasks: state.availableTasks.concat(newTask),
                };

        case DELETE_TASK :
            return {
                ...state,
                availableTasks: state.availableTasks
                .filter(task => task.taskId !== action.tid),

            };
    } 
    return state;
};
