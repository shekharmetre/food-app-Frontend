import {createSlice} from '@reduxjs/toolkit'

const loggedUser = createSlice({
  name : "detailItem",
  initialState : {},
  reducers : {
    detailItem (state,action) {
      state['item'] = action.payload
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default loggedUser.reducer;
export const {detailItem,removeUser,deleteUsers} = loggedUser.actions