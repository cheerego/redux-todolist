import {
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    DELETE_TODO,
    CLEAR_COMPLETED,
    COMPLETED_ALL,
    UNCOMPLETED_ALL,
    EDIT_TODO
} from '../actions/actions'
import {combineReducers} from 'redux'


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload
    }
    return state
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.payload,
                completed: false
            }];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.payload),
                Object.assign({}, state[action.payload], {
                    completed: !state[action.payload].completed
                }),
                ...state.slice(action.payload + 1)
            ];
        case EDIT_TODO:
            return [
                ...state.slice(0, action.payload.index),
                Object.assign({}, state[action.payload.index], {
                    text: action.payload.text
                }),
                ...state.slice(action.payload.index + 1)
            ];
        case DELETE_TODO:
            return state.slice(0, action.payload).concat(state.slice(action.payload + 1))
        case CLEAR_COMPLETED:
            return state.filter((todo) => todo.completed !== true)
        case COMPLETED_ALL:
            return state.concat().map((todo) => ({text: todo.text, completed: true}))
        case UNCOMPLETED_ALL:
            return state.concat().map((todo) => ({text: todo.text, completed: false}))
    }
    return state;
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})
export default todoApp
