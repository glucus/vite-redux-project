import { useForm, hasLength } from "@mantine/form"
import { Textarea, Box, Group, Button } from "@mantine/core"
import { useCallback } from "react"
import { useAppDispatch } from "../../app/hooks"
import { createPostAsync } from "../../features/posts/postsSlice"

export type AddPostFormState = {
  message: string
}

type Props = {
  close: () => void
}

export const AddPostForm = ({ close }: Props) => {
  const dispatch = useAppDispatch()

  const form = useForm({
    initialValues: {
      message: "",
    },
    validate: {
      message: hasLength(
        { min: 1, max: 200 },
        "Message must be 1-200 characters long",
      ),
    },
  })

  const handleSubmit = useCallback(
    (data: AddPostFormState) => {
      dispatch(createPostAsync(data)).then(() => {
        form.reset()
        close()
      })
    },
    [close, dispatch, form],
  )

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Textarea
        placeholder="Your message (200 symbols max)"
        autosize
        minRows={2}
        maxRows={4}
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
