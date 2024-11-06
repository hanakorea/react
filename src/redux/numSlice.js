import { createSlice } from "@reduxjs/toolkit";

const num =createSlicece({
  name:'num',
  initialState:1,
  reducers:{
    changeNum(){
      return 11;
    },
    plusNum(state){
      return state+1;
    },
    minusNum(state, action){
      console.log(action)
      return state-action.payload
    }
  }
})

export const {changeNum, plusNum, minusNum} = num.actions
export default num;

// num만 하는 redux만듬