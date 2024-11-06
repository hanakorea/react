import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cart = createSlice({
  name:'cart',
  initialState:[ ],
  reducers:{
    // state는 현재 변수안에 있는 값, state를 변경하면 그 값
    // action은 함수 호출하고 보내주는 인수 -> action.payload들어있음 => 값보낼때 {}형식으로 보내야함
    addCount(state, action){
      // 어떤 상품을 증가시킬건지 index -> action으로 매개변수 받아옴
      const index = state.findIndex((data)=>{
        return data.id == action.payload;
      })
      state[index].count++
    },
    addItem(state, action){
      const index = state.findIndex((data)=>{
        return data.id == action.payload.id;
      })
      {
        index==-1?state.push(action.payload):state[index].count++
      }
    }, 
    removeItem(state, action){
      const index = state.findIndex((data)=>{
        return data.id == action.payload
      })
      state.splice(index,1)
    }
  }
})

export const {addCount, addItem, removeItem} = cart.actions

// state 내보내기
export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})