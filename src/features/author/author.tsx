import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loader, Text } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAuthorAsync, authorStateSelector } from "../author/authorSlice"

import { AuthorInfo } from "./authorInfo"

export const Author = () => {
  let { authorId } = useParams()
  // console.log('authorId', authorId);

  const { author, status } = useAppSelector(authorStateSelector)
  const dispatch = useAppDispatch()

  // TODO: reset state after change url params
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
  if (status === "idle" && author) {
    return (
      <>
        <AuthorInfo author={author} />
      </>
    )
  }
  return null
}
