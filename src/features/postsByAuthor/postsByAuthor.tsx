import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { postsByAuthorStateSelector } from "./postsByAuthorSlice"
import { fetchPostsByAuthorAsync } from "./postsByAuthorSlice"
import { Post } from "../../components/post"
import { Loader } from "@mantine/core"
import { Text } from "@mantine/core"

export const PostsByAuthor = () => {
  let { authorId } = useParams()

  const { postsByAuthor, status } = useAppSelector(postsByAuthorStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle" && authorId) {
      dispatch(fetchPostsByAuthorAsync({ authorId }))
    }
  }, [postsByAuthor, authorId, dispatch, fetchPostsByAuthorAsync])

  if (status === "loading") {
    return <Loader />
  }
  if (status === "failed") {
    return (
      <div>
        <Text>Failed loading content</Text>
      </div>
    )
  }
  if (status === "success" && postsByAuthor?.length > 0) {
    return (
      <div>
        {postsByAuthor.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    )
  }
  if (status === "success" && !postsByAuthor) {
    return (
      <div>
        <Text>No posts by author found</Text>
      </div>
    )
  }
  return null
}
