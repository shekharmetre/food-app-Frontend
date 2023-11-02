import {createSlice} from '@reduxjs/toolkit'

const Table = createSlice({
  name : "table",
  initialState : {},
  reducers : {
    addTable(state,action) {
      state['table'] = action.payload
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default Table.reducer;
export const {addTable,removeUser,deleteUsers} = Table.actions