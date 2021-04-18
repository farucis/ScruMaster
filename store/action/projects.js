import { ThemeContext } from "react-navigation";
import Project from '../../models/project';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const SET_PROJETCS = 'SET_PROJECTS';
export const SET_MY_PROJETCS = 'SET_MY_PROJECTS';



export const fetchProjects = () => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
         const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/projects.json');
        const resData = await response.json();
        const loadedProjects = [];
        for (const key in resData ) {
            loadedProjects.push(new Project(
                key,
                resData[key].ownerId,
                resData[key].title
               )
            );
        }
        dispatch ({type: SET_PROJETCS, projects: loadedProjects, userProjects: loadedProjects.filter(proj => proj.ownerId === userId ) });
    };
};


export const fetchMyProjects = (userId) => {
    return async (dispatch) => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/projects.json');
        const resData = await response.json();
        const loadedProjects = [];
        for (const key in resData ) {
            loadedProjects.push(new Project(
                key,
                resData[key].ownerId,
                resData[key].title
               )
            );
        }
        dispatch ({type: SET_MY_PROJETCS, projects: loadedProjects, userProjects: loadedProjects.filter(proj => proj.ownerId === userId )});
    };
};


export const deleteProject = projectId => {
    return async dispatch => {
         await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/projects/${projectId}.json`, {
            method: 'DELETE',
        });
    dispatch ({type: DELETE_PROJECT, pid: projectId });    
  };
};


export const createProject = (title) => {
    return async (dispatch,getState) => {
        const userId = getState().auth.userId;
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/projects.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                ownerId: userId
            })
        });

        const resData = await response.json();

        dispatch({
            type: CREATE_PROJECT, projectData: { projectId: resData.name, ownerId: userId, title } 
        });
    };
};