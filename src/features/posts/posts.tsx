import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { postsStateSelector } from "../posts/postsSlice"
import { fetchPostsAsync } from "../posts/postsSlice"
import { useEffect } from "react"
import { Post } from "../../components/post"
import { Group, Center, Loader } from "@mantine/core"
import { Text } from "@mantine/core"

export const Posts = () => {
  const { posts, status } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPostsAsync())
    }
  }, [dispatch, fetchPostsAsync])

  if (status === "loading") {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }
  if (status === "failed") {
    return (
      <div>
        <Text>Failed loading content</Text>
      </div>
    )
  }
  if (status === "idle" && posts?.length > 0) {
    return (
      <Group>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Group>
    )
  }
  return null
}
