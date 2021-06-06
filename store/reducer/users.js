import { ActionSheetIOS } from 'react-native';
import User from '../../models/user';
import { DELETE_USER, SET_USERS, UPDATE_USER, UPDATE_USER_ADMIN, ADD_USER_TO_PROJECT, DELETE_USER_FROM_PROJECT, FETCH_USERS_PROJECT, ADD_USER_TO_TASK, DELETE_USER_FROM_TASK} from '../action/users';


const initialState = {
    availableUsers: [],
    loginUser: [],
    userProject: [],
    userTask: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_PROJECT:
            return {
                userProject: action.userProject,
            };
        case ADD_USER_TO_TASK:
            const useri = state.availableUsers.findIndex(user => user.userId === action.userTask.userId);
            const updatUser = new User(
                                        action.userTask.userId,   
                                        action.userTask.taskId
                                        );
            const updatedUserL = [...state.availableUsers];
            updatedUserL[useri] =updatUser;
            return {
                ...state,
                availableUsers: updatedUserL
            }; 
            
        case DELETE_USER_FROM_TASK:
            return {
                ...state,
                availableUsers: state.availableUsers
                .filter(user => user.userId !== action.uid),
            };
        case ADD_USER_TO_PROJECT:
            const userI = state.availableUsers.findIndex(user => user.userId === action.userProject.userId);
            const updatedU = new User(
                                        action.userProject.userId,   
                                        action.userProject.projectId
                                        );
            const updatedList = [...state.availableUsers];
            updatedList[userI] = updatedU;
            return {
                ...state,
                availableUsers: updatedList
            };
        case DELETE_USER_FROM_PROJECT:
            return {
                ...state,
                availableUsers: state.availableUsers
                .filter(user => user.userId !== action.uid),
            };
        case SET_USERS:
            return {
                availableUsers: action.users,
                loginUser: action.loginUser
            };
        case DELETE_USER :
            return {
                ...state,
                availableUsers: state.availableUsers
                .filter(user => user.userId !== action.uid),

            };
        case UPDATE_USER:
            const userIndex = state.availableUsers.findIndex(user => user.userId === action.uid);
            const updatedUser = new User(
                                        action.uid,   
                                        action.userData.name,
                                        action.userData.phone,
                                        action.userData.age,
                                        );
            const updatedUserList = [...state.availableUsers];
            updatedUserList[userIndex] = updatedUser;
            return {
                ...state,
                availableUsers: updatedUserList
            };
        case UPDATE_USER_ADMIN:
            const userInd = state.availableUsers.findIndex(user => user.userId === action.uid);
            const updatUsers = new User(
                                        action.uid,  
                                        action.userData.permission, 
                                        action.userData.name,
                                        action.userData.phone,
                                        action.userData.age,
                                        );
            const updatedLis = [...state.availableUsers];
            updatedLis[userInd] = updatUsers;
            return {
                ...state,
                availableUsers: updatedLis
            };                    
    } 
    return state;
};
