import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 10,
// }
export const CartSlice = createSlice({
  name:"cart",
  initialState:[],
  reducers:{
    remove: (state)=>{return state},
    add: (state)=>{return state},
  }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

