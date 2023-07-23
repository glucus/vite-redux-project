import { useParams } from "react-router-dom"

export const Author = () => {
  let { authorId } = useParams()

  return <div>{authorId}</div>
}
