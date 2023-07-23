import { Author } from "../features/author/author"
import { PostsByAuthor } from "../features/postsByAuthor/postsByAuthor"

export const AuthorPage = () => {
  return (
    <>
      <Author />
      <PostsByAuthor />
    </>
  )
}
