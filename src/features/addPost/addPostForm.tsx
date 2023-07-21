import { useForm, hasLength } from "@mantine/form"
import { TextInput, Textarea, Box, Group, Button } from "@mantine/core"
import { useCallback } from "react"
// import { createPost } from "../posts/postsAPI"

export type AddPostFormState = {
  name: string
  message: string
}

type Props = {
  close: () => void
}

export const AddPostForm = ({ close }: Props) => {
  const form = useForm({
    initialValues: {
      name: "",
      message: "",
    },
    validate: {
      name: hasLength({ min: 1, max: 20 }, "Name must be 1-20 characters long"),
      message: hasLength(
        { min: 1, max: 200 },
        "Message must be 1-200 characters long",
      ),
    },
  })

  // TODO: вызывать thunk с mockApi, после чего в случае успеха закрывать модалку (форма ресетится при закрытии)
  const handleSubmit = useCallback((data: AddPostFormState) => {
    // createPost(data).then(() => {
    console.log("added post ", data)
    form.reset()
    close()
    // })
  }, [])

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps("name")}
      />
      <Textarea
        placeholder="Your message (200 symbols max)"
        label="Message"
        withAsterisk
        {...form.getInputProps("message")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  )
}
