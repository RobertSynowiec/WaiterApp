import { createSelector } from 'reselect';

//selectors
const selectStatusTables = state => state.status;

export const getAllStatus = createSelector([selectStatusTables], status => status);

// actions
const createActionName = actionName => `app/status/${actionName}`;
const UPDATE_LOCAL_STATUS = createActionName('UPDATE_LOCAL_STATUS');

// action creators
export const updateLocalStatus = payload => ({ type: UPDATE_LOCAL_STATUS, payload });
export const fetchStatus = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/status')
            .then(res => res.json())
            .then(status => dispatch(updateLocalStatus(status)));
    }
};

const tablesStausReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_LOCAL_STATUS:
            return [...action.payload]
        default:
            return statePart;
    };
};
export default tablesStausReducer;