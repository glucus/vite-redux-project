// A mock function to mimic making an async request for data
import { PostContents } from "../posts/types"
import { POSTS } from "../posts/mocks"

export type FetchFilteredPostsParams = {
  query: string
  posts: PostContents[] | []
}

// TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
const findFilteredPosts = ({ query, posts }: FetchFilteredPostsParams) => {
  const regex = new RegExp(query, "i")
  const postsToFilter = posts.length > 0 ? posts : POSTS

  return postsToFilter.filter((post) => regex.test(post.message))
}

/** GET POSTS BY PARAMS
 * @params - фильтр и значение фильтра
 * filterBy: string
 * query: string
 * можно добавить параметры типа количество постов за раз и другие фильтры
 * @returns массив постов PostContents (может быть пустым) или Error
 * */

export const fetchFilteredPosts = (params: FetchFilteredPostsParams) => {
  const filteredPosts = findFilteredPosts(params)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(`fetching posts for query ${params.query}`)
    setTimeout(() => resolve({ data: filteredPosts }), 500)
  })
}
