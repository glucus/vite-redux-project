import { Author } from "./types"
import { Card, Group, Text, Avatar, Stack } from "@mantine/core"
import { format } from "date-fns"
import { memo } from "react"

type Props = {
  author: Author
}
export const AuthorInfo = memo(
  ({ author }: Props) => {
    const { image, firstName, lastName, about, email, registered } = author

    const formatRegistered = (registered: string) => {
      const date = Date.parse(registered)
      return format(date, "MMM do yyyy")
    }

    const fullName = `${firstName} ${lastName}`

    return (
      <Card radius="md" p="xs">
        <Group spacing="sm">
          <Group spacing="xs">
            <Group spacing="sm" noWrap>
              <Avatar size="xl" src={image} alt={fullName} />
              <Stack spacing="xs">
                <Text size="md" weight={700}>
                  {fullName}
                </Text>
                <Text c="teal" size="sm">
                  {email}
                </Text>
                <Text size="sm" color="dimmed">
                  {`Registered ${formatRegistered(registered)}`}
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
  },
  (prevProps, nextProps) => prevProps.author.id === nextProps.author.id,
)
