
import Sprint from '../../models/sprint';

export const DELETE_SPRINT = 'DELETE_SPRINT';
export const CREATE_SPRINT = 'CREATE_SPRINT';
export const SET_SPRINTS = 'SET_SPRINTS';


export const fetchSprints = () => {
    return async dispatch => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/sprints.json');
        const resData = await response.json();
        const loadedSprints = [];
        for (const key in resData ) {
            loadedSprints.push(new Sprint(
                key,
                resData[key].projectId,
                resData[key].number,
                resData[key].time
               )
            );
        }
        dispatch ({type: SET_SPRINTS, sprints: loadedSprints });
    };
};



export const deleteSprint = sprintId => {
    return async dispatch => {
        await fetch(`https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/sprints/${sprintId}.json`, {
            method: 'DELETE',
        });
    dispatch ({type: DELETE_SPRINT, sid: sprintId});    
  };
 };
    


export const createSprint = (projectId, number, time) => {
    return async dispatch => {
        const response = await fetch('https://scrumaster-702cc-default-rtdb.europe-west1.firebasedatabase.app/sprints.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                projectId,
                number,
                time
            })
        });

        const resData = await response.json();

        dispatch({
            type: CREATE_SPRINT, sprintData: { sprintId: resData.name, projectId, number, time } 
        });
    };
};



