import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 10,
// }
export const CartSlice = createSlice({
  name:"cart",
  initialState:[],
  reducers:{
    remove: (state, action)=>{
      return state.filter((item)=> item.id !== action.payload)
    },
    add: (state, action)=>{
      state.push(action.payload)
    },
  }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

