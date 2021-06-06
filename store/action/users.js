import User from '../../models/user';

export const DELETE_USER = 'DELETE_USER';
export const SET_USERS = 'SET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ADMIN = 'UPDATE_USER_ADMIN';
export const ADD_USER_TO_PROJECT = 'ADD_USER_TO_PROJECT';
export const DELETE_USER_FROM_PROJECT = 'DELETE_USER_FROM_PROJECT'
export const FETCH_USERS_PROJECT = 'FETCH_USERS_PROJECT'
export const ADD_USER_TO_TASK = 'ADD_USER_TO_TASK'; 
export const DELETE_USER_FROM_TASK = 'DELETE_USER_FROM_TASK'; 

export const fetchUsers = () => {
    return async (dispatch, getState)  => {
        const userId = getState().auth.userId;
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users.json');
        const resData = await response.json();
        const loadedUsers = [];
        for (const key in resData ) {
            loadedUsers.push(new User(
                key,
                resData[key].projectId,
                resData[key].taskId,
                resData[key].permission,
                resData[key].name,
                resData[key].phone,
                resData[key].age,
                )
            );
        }
        dispatch ({type: SET_USERS, users: loadedUsers, loginUser: loadedUsers.find(user => user.userId === userId )});
    };
};

export const deleteUser = userId => {
    return async dispatch => {
        await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`, {
           method: 'DELETE',
       });
    dispatch ({type: DELETE_USER, uid: userId  });    
  };
};

export const updateUser = (userId, name, phone, age) => {
    return async (dispatch) => {
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phone, age})
            });

            dispatch({ type: UPDATE_USER, uid: userId, userData : { name, phone, age} });
    };
};


export const updateUserAdmin = (userId, permission, name, phone, age) => {
    return async (dispatch) => {
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({permission, name, phone, age})
            });

            dispatch({ type: UPDATE_USER, uid: userId, userData : { permission, name, phone, age} });
    };
};

export const addUserToProject = (userId, projectId) => {
    return async (dispatch) => {
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/projectId/${projectId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({projectId})
            });

            dispatch({ type: ADD_USER_TO_PROJECT, userProject : { userId, projectId }});
    };
};


export const deleteUserFromProject = (userId, projectId) => {
    return async (dispatch) => {
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/projectId/${projectId}.json`, {
            method: 'DELETE',
        });
     dispatch ({type: DELETE_USER_FROM_PROJECT, uid: userId} );    
   };
 };


 export const addUserToTask = (userId, taskId) => {
    return async (dispatch) => {
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/taskId/${taskId}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({taskId})
            });

            dispatch({ type: ADD_USER_TO_TASK, userTask : { userId, taskId }});
    };
};


export const deleteUserFromTask = (userId, taskId) => {
    return async (dispatch) => {
        const response = await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/taskId/${taskId}.json`, {
            method: 'DELETE',
        });
     dispatch ({type: DELETE_USER_FROM_TASK, uid: userId} );    
   };
 };
/*  export const fetchUsersProject = (projectId) => {
    return async (dispatch)  => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/users.json');
        const resData = await response.json();
        const loadedUsers = [];
        for (const key in resData ) {
            loadedUsers.push(new User(
                key,
                resData[key].projectId,
                resData[key].taskId,
                resData[key].permission,
                resData[key].name,
                resData[key].phone,
                resData[key].age,
                )
            );
        }   
          
         obj = loadedUsers.filter(user => (user.projectId[projectId].projectId) === projectId);
         console.log(obj)
         dispatch ({type: FETCH_USERS_PROJECT, userProject : obj });
    };
}; 
 */