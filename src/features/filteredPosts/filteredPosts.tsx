import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { filteredPostsStateSelector } from "./filteredPostsSlice"
import { fetchFilteredPostsAsync } from "./filteredPostsSlice"
import { Post } from "../../components/post"
import { Stack, Center, Loader } from "@mantine/core"
import { Text } from "@mantine/core"
import { useSearchParams } from "react-router-dom"

export const FilteredPosts = () => {
  let [searchParams] = useSearchParams()

  const { filteredPosts, status } = useAppSelector(filteredPostsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle" && searchParams) {
      const filterBy = searchParams.get("filterBy")
      const query = searchParams.get("query")
      dispatch(fetchFilteredPostsAsync({ filterBy, query }))
    }
  }, [searchParams, dispatch, fetchFilteredPostsAsync])

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
  if (status === "idle" && filteredPosts?.length > 0) {
    return (
      <>
        <Stack>
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Stack>
      </>
    )
  }
  return null
}
