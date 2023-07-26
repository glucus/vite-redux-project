// A mock function to mimic making an async request for data
import { PostContents } from "./types"
import { AddPostFormState } from "../../components/addPost/addPostForm"
import { POSTS } from "./mocks"
import { NEW_POST_AUTHOR } from "../author/mocks"
import uniqueId from "lodash/uniqueId"

/** GET POSTS
 * Выдает все посты, можно добавить параметры типа количество постов за раз
 * @params
 * @returns массив постов PostContents (может быть пустым) или Error
 */

export const fetchPosts = () => {
  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log("fetching posts")
    setTimeout(() => resolve({ data: POSTS }), 500)
  })
}

const addPostInfo = (data: AddPostFormState) => {
  // user registration / login, etc
  const author = NEW_POST_AUTHOR

  const date = new Date()
  const isoString = date.toISOString()

  const id = uniqueId(author.firstName + author.lastName)

  return {
    ...data,
    author,
    id,
    posted: isoString,
  }
}

/** POST POST
 * Создает новый пост
 * @params post: AddPostFormState (message: string, id автора)
 * @returns созданный пост в формате postContent или Error
 */

export const createPost = (post: AddPostFormState) => {
  const postContent = addPostInfo(post)

  return new Promise<{ data: PostContents }>((resolve) => {
    console.log(`creating post`)
    setTimeout(() => resolve({ data: postContent }), 500)
  })
}
