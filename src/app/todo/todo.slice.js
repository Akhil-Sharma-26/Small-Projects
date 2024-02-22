import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text:"Helow"
    }],
}
export const todoSlicer = createSlice({
    name: 'todo', // will be shown in the broswer extension
    initialState,
    reducers: {
        addTodo: (state,action)=>{ // state->Tells the current value of initState. action->arg kinda
            const newTodo = {
                id: nanoid(),
                text:action.payload, // payload is a object
            }
            console.log(action.payload);
            state.todos.push(newTodo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todos)=>todos.id !== action.payload)
            console.log(action.payload);
        },
        updateTodo: (state,action)=>{
            // Do
        },
    }
})

export const {addTodo,removeTodo}=todoSlicer.actions

export default todoSlicer.reducer