import { useParams } from "react-router-dom"
import { Author } from "../features/author/author"

export const AuthorPage = () => {
  let { authorId } = useParams()

  return (
    <>
      <Author authorId={authorId} />
    </>
  )
}
