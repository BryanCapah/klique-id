import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createNewTodo(state, action) {
            state.push(action.payload)
        },
        fetchData: (state, action) => {
            return action.payload
        }
    },
})

// getter
export const getTodo = state => state?.todo

//setter
export const { createNewTodo, fetchData } = todo.actions
export default todo.reducer
