import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlice"
import filteredPostsReducer from "../features/filteredPosts/filteredPostsSlice"
import authorReducer from "../features/author/authorSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    filteredPosts: filteredPostsReducer,
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
