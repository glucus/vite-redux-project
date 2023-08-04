import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { postsStateSelector } from "./postsSlice"
import { fetchPostsAsync } from "./postsSlice"
import { useEffect, useMemo } from "react"
import { Post } from "../../components/post"
import { Stack, Center, Loader, Title, Group } from "@mantine/core"
import { Text } from "@mantine/core"

export const Posts = () => {
  const { posts, status } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPostsAsync())
    }
  }, [dispatch, status])

  const content = useMemo(() => {
    switch (status) {
      case "loading": {
        return (
          <Center>
            <Loader />
          </Center>
        )
      }
      case "failed": {
        return (
          <div>
            <Text>Failed loading content</Text>
          </div>
        )
      }
      case "success": {
        if (posts.length > 0) {
          return (
            <Stack>
              <Title order={3}>Posts</Title>
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </Stack>
          )
        } else {
          return (
            <Group>
              <Text>No posts found</Text>
            </Group>
          )
        }
      }
      default:
        return null
    }
  }, [posts, status])

  return content
}
