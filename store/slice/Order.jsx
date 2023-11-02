import {createSlice} from '@reduxjs/toolkit'

const Order = createSlice({
  name : "order",
  initialState : {},
  reducers : {
    orderedItem (state,action) {
      state['order'] = action.payload
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default Order.reducer;
export const {addMessage,removeUser,deleteUsers} = Order.actions