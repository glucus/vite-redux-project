import { useDisclosure } from "@mantine/hooks"
import { Modal, Button, Group, LoadingOverlay } from "@mantine/core"
import { AddPostForm } from "./addPostForm"
import { useAppSelector } from "../../app/hooks"
import { postsStateSelector } from "../../features/posts/postsSlice"
import { useEffect, useMemo } from "react"
import { notifications } from "@mantine/notifications"
import { IconX, IconCheck } from "@tabler/icons-react"

export const AddPost = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const { createPostStatus } = useAppSelector(postsStateSelector)

  useEffect(() => {
    if (createPostStatus === "failed") {
      notifications.show({
        message: "An error has occurred adding post",
        color: "red",
        icon: <IconX />,
      })
    }
    if (createPostStatus === "success") {
      notifications.show({
        message: "Post successfully added",
        color: "teal",
        icon: <IconCheck />,
      })
    }
  }, [createPostStatus])

  return useMemo(
    () => (
      <>
        <Modal opened={opened} onClose={close} title="Write something">
          <LoadingOverlay visible={createPostStatus === "loading"} />
          <AddPostForm close={close} />
        </Modal>
        <Group position="center">
          <Button onClick={open}>New post</Button>
        </Group>
      </>
    ),
    [close, createPostStatus, open, opened],
  )
}
