import { createSelector } from 'reselect';

//selectors
const selectStatusTables = state => state.status;

export const getAllStatus = createSelector([selectStatusTables], status => status);

// actions
const createActionName = actionName => `app/status/${actionName}`;

// action creators
const tablesStausReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};
export default tablesStausReducer;