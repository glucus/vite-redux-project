// A mock function to mimic making an async request for data
import { PostContents } from "../posts/types"
import { POSTS } from "../posts/mocks"

export type FetchPostsByAuthorParams = { authorId: string }

const findPostsByAuthor = (authorId: string) => {
  return POSTS.filter((post) => post.author.id === authorId)
}

export const fetchPostsByAuthor = ({ authorId }: FetchPostsByAuthorParams) => {
  const postsByAuthor = findPostsByAuthor(authorId)

  return new Promise<{ data: PostContents[] | [] }>((resolve) => {
    console.log(`fetching posts of author ${authorId}`)
    setTimeout(() => resolve({ data: postsByAuthor }), 500)
  })
}
