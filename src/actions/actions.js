/**
 * Created by placeless on 17/1/27.
 */


export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"
export const COMPLETED_ALL = "COMPLETED_ALL"
export const UNCOMPLETED_ALL = 'UNCOMPLETED_ALL'
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
export const EDIT_TODO = 'EDIT_TODO'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const addTodo = (text) => ({
    type: ADD_TODO, payload: text
})
export const uncompletedAll = () => ({
    type: UNCOMPLETED_ALL
})
export const completedAll = () => ({
    type: COMPLETED_ALL
})

export const deleteTodo = (index) => ({
    type: DELETE_TODO, payload: index
})
export const clearCompleted = () => ({
    type: CLEAR_COMPLETED
})

export const completeTodo = (index) => ({
    type: COMPLETE_TODO,
    payload: index
})

export const editTodo = (index, text) => ({
    type: EDIT_TODO,
    payload: {index: index, text: text}
})

export const setVisibilityFilter = (filter) => ( {
    type: SET_VISIBILITY_FILTER, payload: filter
})


