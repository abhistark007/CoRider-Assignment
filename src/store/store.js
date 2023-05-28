import { configureStore } from '@reduxjs/toolkit'
import chatsSlice from './chatsSlice'

export default configureStore({
  reducer: {
    chat:chatsSlice
  },
})