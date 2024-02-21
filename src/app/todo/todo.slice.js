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
                text:action.payload.text, // payload is a object
            }
            state.todos.push(newtodo)
        },
        removeTodo: (state,action)=>{},
    }
})