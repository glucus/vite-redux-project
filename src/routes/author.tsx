import { Author } from "../features/author/author"
import { PostsByAuthor } from "../features/postsByAuthor/postsByAuthor"

import { useParams } from "react-router-dom"

export const AuthorPage = () => {
  let { authorId } = useParams()
  if (authorId) {
    return (
      <>
        <Author authorId={authorId} />
        <PostsByAuthor authorId={authorId} />
      </>
    )
  }

  return null
}
