import { Author } from "./types"
import { Card, Group, Text, Avatar, Stack } from "@mantine/core"
import moment from "moment"

type Props = {
  author: Author
}
export const AuthorInfo = ({ author }: Props) => {
  const { image, firstName, lastName, about, email, registered } = author

  return (
    <Card radius="md" p="xs">
      <Group spacing="sm">
        <Group spacing="xs">
          <Group spacing="sm" noWrap>
            <Avatar size="xl" src={image} />
            <Stack spacing="xs">
              <Text size="md" weight={700}>{`${firstName} ${lastName}`}</Text>
              <Text c="teal" size="sm">
                {email}
              </Text>
              <Text size="sm" color="dimmed">
                {`Registered ${moment(registered).format("MMMM D YYYY")}`}
              </Text>
            </Stack>
          </Group>
        </Group>
        <Text mb="md" size="md">
          {about}
        </Text>
      </Group>
    </Card>
  )
}
