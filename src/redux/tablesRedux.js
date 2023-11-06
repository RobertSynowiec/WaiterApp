import { createSelector } from 'reselect';
import { API_URL } from '../config'

//selectors
const selectTables = state => state.tables;
const selectTableId = (state, id) => id;

export const getAllTables = createSelector([selectTables], tables => tables);
export const getTableById = createSelector(
    [selectTables, selectTableId],
    (tables, id) => tables.find(table => table.id === id)
);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_LOCAL_TABLES = createActionName('UPDATE_LOCAL_TABLES');
const EDIT_TABLES = createActionName('EDIT_TABLES');

// action creators
export const updateLocalTables = payload => ({ type: UPDATE_LOCAL_TABLES, payload });

export const fetchTables = () => {
    return (dispatch) => {
        fetch(`${API_URL}/tables`)
            .then(res => res.json())
            .then(tables => dispatch(updateLocalTables(tables)));
    }
};
export const editTables = payload => ({ type: EDIT_TABLES, payload });

export const editTablesRequest = (id, newEditTables) => {
    console.log(id)
    return dispatch => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEditTables),
        };

        fetch(`${API_URL}/tables/${id}`, options)
            .then(newEditTables => dispatch(editTables(newEditTables)))
    }
}

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_LOCAL_TABLES:
            return [...action.payload];
        case EDIT_TABLES:
            return statePart.map(tables => (tables.id === action.payload.id ? { ...tables, ...action.payload } : tables));
        default:
            return statePart;
    };
};
export default tablesReducer;