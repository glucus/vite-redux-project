import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {
  fetchFilteredPosts,
  FetchFilteredPostsParams,
} from "./filteredPostsAPI"
import { PostContents } from "../posts/types"

export interface State {
  filteredPosts: [] | PostContents[]
  status: "idle" | "loading" | "failed"
}

const initialState: State = {
  filteredPosts: [],
  status: "idle",
}

export const fetchFilteredPostsAsync = createAsyncThunk(
  "posts/fetchFilteredPosts",
  async (params: FetchFilteredPostsParams) => {
    const response = await fetchFilteredPosts(params)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)

export const filteredPostsSlice = createSlice({
  name: "filteredPosts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredPostsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchFilteredPostsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.filteredPosts = action.payload
      })
      .addCase(fetchFilteredPostsAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const filteredPostsStateSelector = (state: RootState) =>
  state.filteredPosts

export default filteredPostsSlice.reducer