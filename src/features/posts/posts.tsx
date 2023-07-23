import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { postsStateSelector } from "../posts/postsSlice"
import { fetchPostsAsync } from "../posts/postsSlice"
import { useEffect } from "react"
import { Post } from "../../components/post"
import { Loader } from "@mantine/core"
import { Text } from "@mantine/core"

export const Posts = () => {
  const { posts, status } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TODO: можно добавить еще условия
    if (status === "idle") {
      dispatch(fetchPostsAsync())
    }
  }, [posts, dispatch, fetchPostsAsync])

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
  if (status === "success" && posts?.length > 0) {
    return (
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    )
  }
  if (status === "success" && !posts) {
    return (
      <div>
        <Text>No posts found</Text>
      </div>
    )
  }
  return null
}
