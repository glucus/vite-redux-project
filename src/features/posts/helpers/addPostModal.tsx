import { useDisclosure } from "@mantine/hooks"
import { Modal, Button, Group } from "@mantine/core"
import { AddPostForm } from "./addPostForm"

export const AddPostModal = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Write something"
      >
        <AddPostForm />
      </Modal>

      <Group position="center">
        <Button onClick={open}>New post</Button>
      </Group>
    </>
  )
}
