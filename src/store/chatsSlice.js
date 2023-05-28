import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
  name: 'chat',
  initialState: {
    value: {},
    from:"",
    message:"",
    name:"",
    status:"",
    to:""
  },
  reducers: {
    fetchChatsResults: (state,action) => {
      state.value=action.payload.chats;
      state.from=action.payload.from;
      state.message=action.payload.message;
      state.name=action.payload.name;
      state.status=action.payload.status;
      state.to=action.payload.to;
    },
    addChatsResults: (state,action)=>{
        state.value.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchChatsResults,addChatsResults } = chatsSlice.actions

export default chatsSlice.reducer