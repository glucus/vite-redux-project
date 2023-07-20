import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { fetchPosts } from "./postsAPI"
import { PostContents } from "./helpers/types"

export interface PostsState {
  posts: [] | PostContents[]
  status: "idle" | "loading" | "failed" | "success"
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPosts",
  // TODO: какие параметры должны быть
  async () => {
    const response = await fetchPosts()
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPost: (state, action: PayloadAction<PostContents>) => {
      // TODO: в каком порядке добавлять
      state.posts = [...state.posts, action.payload]
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = "success"
        state.posts = [...state.posts, ...action.payload]
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { addPost } = postsSlice.actions

export const postsStateSelector = (state: RootState) => state.posts

export default postsSlice.reducer
