import { createSlice } from '@reduxjs/toolkit'
// import React from 'react'

const initialState = {
    value: 0,
    heading:"Todo List In React-Redux"
  }

  export const TodoAppActions = createSlice({
    name:"TodoApp",
    initialState,
    reducers:{
        
    }
  })

// export const {}=TodoAppActions.actions
export default TodoAppActions.reducer