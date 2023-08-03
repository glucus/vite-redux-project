import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { authorStateSelector, fetchPostsByAuthorAsync } from "./authorSlice"
import { postsStateSelector } from "../posts/postsSlice"
import { Post } from "../../components/post"
import { Stack, Center, Loader, Title } from "@mantine/core"
import { Text } from "@mantine/core"
import { useParams } from "react-router-dom"

export const PostsByAuthor = () => {
  let { authorId } = useParams()

  const { postsByAuthor, postsByAuthorStatus } =
    useAppSelector(authorStateSelector)
  const { posts, status } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (
      authorId &&
      (postsByAuthor.length === 0 || postsByAuthor[0].author.id !== authorId)
    ) {
      // TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
      dispatch(fetchPostsByAuthorAsync({ authorId, posts }))
    }
  }, [dispatch, posts, postsByAuthorStatus, status, authorId, postsByAuthor])

  if (postsByAuthorStatus === "loading") {
    return (
      <Center>
        <Loader size="sm" variant="dots" />
      </Center>
    )
  }
  if (postsByAuthorStatus === "failed") {
    return <Text>Failed loading content</Text>
  }
  if (postsByAuthorStatus === "success" && postsByAuthor?.length > 0) {
    return (
      <>
        <Stack>
          <Title order={3}>Posts by author</Title>
          {postsByAuthor.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Stack>
      </>
    )
  }
  if (postsByAuthorStatus === "success" && postsByAuthor?.length === 0) {
    return (
      <Stack>
        <Title order={3}>Posts by author</Title>
        <Text>No matching posts found</Text>
      </Stack>
    )
  }
  return null
}
