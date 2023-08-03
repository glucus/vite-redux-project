import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { fetchAuthor, FetchAuthorParams } from "./authorAPI"
import { Author } from "./types"

export interface State {
  author: null | Author
  status: "idle" | "loading" | "failed" | "success"
}

const initialState: State = {
  author: null,
  status: "idle",
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const fetchAuthorAsync = createAsyncThunk(
  "author/fetchAuthor",
  async ({ authorId }: FetchAuthorParams) => {
    const response = await fetchAuthor({ authorId })
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAuthorAsync.fulfilled, (state, action) => {
        state.status = "success"
        state.author = action.payload
      })
      .addCase(fetchAuthorAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const authorStateSelector = (state: RootState) => state.author

export default authorSlice.reducer
