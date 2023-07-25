// A mock function to mimic making an async request for data
import { PostContents } from "../posts/types"
import { POSTS } from "../posts/mocks"

export type FetchFilteredPostsParams = { authorId: string }

const findFilteredPosts = (authorId: string) => {
  return POSTS.filter((post) => post.author.id === authorId)
}

export const fetchFilteredPosts = ({ authorId }: FetchFilteredPostsParams) => {
  const filteredPosts = findFilteredPosts(authorId)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(`fetching posts of author ${authorId}`)
    setTimeout(() => resolve({ data: filteredPosts }), 500)
  })
}
