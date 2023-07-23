import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlice"
import authorReducer from "../features/author/authorSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    author: authorReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
