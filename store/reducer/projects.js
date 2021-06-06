import Project from '../../models/project';

import { DELETE_PROJECT, CREATE_PROJECT, SET_PROJETCS, SET_MY_PROJETCS } from '../action/projects';


const initialState = {
    availableProjects: [],
    userProjects: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJETCS: 
            return {
                availableProjects: action.projects,
                userProjects: action.userProjects
            };
        case SET_MY_PROJETCS: 
        return {
            availableProjects: action.projects,
            userProjects: action.userProjects
        };    
        case CREATE_PROJECT:
             const newProject = new Project(
                 action.projectData.projectId,
                 action.projectData.ownerId,
                 action.projectData.title
                 );
                return {
                    ...state,
                    availableProjects: state.availableProjects.concat(newProject),
                    userProjects: state.userProjects.concat(newProject)
                };

        case DELETE_PROJECT:
            return {
                ...state,
                userProjects: state.userProjects.filter(project => project.projectId !== action.pid),
                availableProjects: state.availableProjects
                .filter(project => project.projectId !== action.pid),

            };
    }
    return state;
};
