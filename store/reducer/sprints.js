import Sprint from '../../models/sprint';
import { DELETE_SPRINT, CREATE_SPRINT, SET_SPRINTS } from '../action/sprints';

const initialState = {
    availableSprints: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SPRINTS:
            return {
                availableSprints: action.sprints,
            };
        case CREATE_SPRINT:
            const newSprint = new Sprint(
                action.sprintData.sprintId,
                action.sprintData.projectId,
                action.sprintData.number,
                action.sprintData.time
                );
                return {
                    ...state,
                    availableSprints: state.availableSprints.concat(newSprint),
                };

        case DELETE_SPRINT:
            return {
                ...state,
                availableSprints: state.availableSprints
                .filter(sprint => sprint.sprintId !== action.sid),

            };
    } 
    return state;
};
