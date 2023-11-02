import {createSlice} from '@reduxjs/toolkit'

const Message = createSlice({
  name : "message",
  initialState : {},
  reducers : {
    addMessage (state,action) {
      state['message'] = action.payload
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default Message.reducer;
export const {addMessage,removeUser,deleteUsers} = Message.actions