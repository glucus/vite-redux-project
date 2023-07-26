// A mock function to mimic making an async request for data
import { PostContents } from "../posts/types"
import { POSTS } from "../posts/mocks"
import { includes } from "lodash"

export type FetchFilteredPostsParams = {
  filterBy: string
  query: string
  posts: PostContents[] | []
}

// TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
const findFilteredPosts = ({
  filterBy,
  query,
  posts,
}: FetchFilteredPostsParams) => {
  const regex = new RegExp(query, "i")

  const postsToFilter = posts.length > 0 ? posts : POSTS

  if (filterBy === "author") {
    return postsToFilter.filter((post) => includes(post.author, query))
  }
  return postsToFilter.filter((post) => regex.test(post.message))
}

export const fetchFilteredPosts = (params: FetchFilteredPostsParams) => {
  const filteredPosts = findFilteredPosts(params)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(
      `fetching posts filtered by ${params.filterBy} for query ${params.query}`,
    )
    setTimeout(() => resolve({ data: filteredPosts }), 500)
  })
}
