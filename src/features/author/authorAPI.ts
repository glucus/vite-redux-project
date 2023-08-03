// A mock function to mimic making an async request for data
import { AUTHORS } from "./mocks"
import { Author } from "./types"
import { POSTS } from "../posts/mocks"
import { PostContents } from "../posts/types"

export type FetchAuthorParams = { authorId: string }
export type FetchPostsByAuthorParams = {
  authorId: string
  // TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
  posts: PostContents[]
}

const findAuthorById = (authorId: string) => AUTHORS[authorId] || null

/**
 * GET AUTHOR
 * Выдает данные по автору поста
 * @param authorId
 * @returns Author или Error
 */

export const fetchAuthor = ({ authorId }: FetchAuthorParams) => {
  const author = findAuthorById(authorId)

  return new Promise<{ data: Author | null }>((resolve) => {
    console.log(`fetching data for author ${authorId}`)
    setTimeout(() => resolve({ data: author }), 500)
  })
}

// TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
const filterPostsByAuthor = ({ authorId, posts }: FetchPostsByAuthorParams) => {
  const postsToFilter = posts.length > 0 ? posts : POSTS
  return postsToFilter.filter((post) => post.author.id === authorId)
}

/** GET POSTS BY AUTHOR
 * @params
 * authorId: string
 * можно добавить параметры типа количество постов за раз и другие фильтры
 * @returns массив постов PostContents (может быть пустым) или Error
 * */

export const fetchPostsByAuthor = (params: FetchPostsByAuthorParams) => {
  const filteredPosts = filterPostsByAuthor(params)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(`fetching posts by author ${params.authorId}`)
    setTimeout(() => resolve({ data: filteredPosts }), 500)
  })
}
