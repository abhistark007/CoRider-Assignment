import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
  name: 'chat',
  initialState: {
    value: {},
  },
  reducers: {
    fetchChatsResults: (state,action) => {
      state.value=action.payload;
    },
    addChatsResults: (state,action)=>{
        state.value.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchShortURLResults,addChatsResults } = chatsSlice.actions

export default chatsSlice.reducer