import { Author } from "./types"
import { Card, Group, Text, Avatar } from "@mantine/core"

type Props = {
  author: Author
}
export const AuthorInfo = ({ author }: Props) => {
  const { image, firstName, lastName, about } = author

  return (
    <Card withBorder radius="md" p="xs">
      <Group spacing="sm">
        <div>
          <Group spacing="xs">
            <Group spacing="sm" noWrap>
              <Avatar size="ml" src={image} />
              <Text size="ml" weight={700}>{`${firstName} ${lastName}`}</Text>
            </Group>
          </Group>
        </div>
        <Text mt="xs" mb="md" align="left" fs="italic">
          {about}
        </Text>
      </Group>
    </Card>
  )
}
