import { useParams } from "react-router-dom"
import { Loader, Text } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAuthorAsync, authorStateSelector } from "../author/authorSlice"
import { useEffect } from "react"

export const Author = () => {
  let { authorId } = useParams()

  const { author, status } = useAppSelector(authorStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle" && authorId) {
      dispatch(fetchAuthorAsync({ authorId }))
    }
  }, [authorId, dispatch, fetchAuthorAsync])

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
  if (status === "success" && author) {
    return <div>{author.firstName}</div>
  }
  return null
}
