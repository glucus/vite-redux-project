import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { postsByAuthorStateSelector } from "./postsByAuthorSlice"
import { fetchPostsByAuthorAsync } from "./postsByAuthorSlice"
import { Post } from "../../components/post"
import { Group, Center, Loader, Title } from "@mantine/core"
import { Text } from "@mantine/core"

export const PostsByAuthor = () => {
  const { postsByAuthor, status } = useAppSelector(postsByAuthorStateSelector)
  const dispatch = useAppDispatch()

  let { authorId } = useParams()

  useEffect(() => {
    if (status === "idle" && authorId) {
      dispatch(fetchPostsByAuthorAsync({ authorId }))
    }
  }, [authorId, dispatch, fetchPostsByAuthorAsync])

  if (status === "loading") {
    return (
      <Center>
        <Loader size="sm" variant="dots" />
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
  if (status === "idle" && postsByAuthor?.length > 0) {
    return (
      <>
        <Group>
          <Title order={4}>Posts by author</Title>
          <Group>
            {postsByAuthor.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </Group>
        </Group>
      </>
    )
  }
  return null
}
