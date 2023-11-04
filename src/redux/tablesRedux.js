import { createSelector } from 'reselect';

//selectors
const selectTables = state => state.tables;

export const getAllTables = createSelector([selectTables], tables => tables);

// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};
export default tablesReducer;