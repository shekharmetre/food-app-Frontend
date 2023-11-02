import {createSlice} from '@reduxjs/toolkit'

const ItemList = createSlice({
  name : "items",
  initialState : [],
  reducers : {
    addItems (state,action) {
      state.push(action.payload)
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default ItemList.reducer;
export const {addItems,removeUser,deleteUsers} = ItemList.actions