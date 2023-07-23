import { Card, Group, Text, Avatar } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { PostContents } from "./types"

type Props = {
  post: PostContents
  key: string
}

export const Post = ({ post }: Props) => {
  const navigate = useNavigate()
  const { message, author, posted } = post

  const handleClick = () => {
    navigate(`/authors/${author.id}`)
  }

  return (
    <Card withBorder radius="md" p="xs" onClick={handleClick}>
      <Group noWrap spacing="sm">
        <div>
          <Text mt="xs" mb="md" align="left">
            {message}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="sm" noWrap>
              <Avatar size="sm" src={author.image} />
              <Text size="sm">{`${author.firstName} ${author.lastName}`}</Text>
            </Group>
            <Text size="sm" color="dimmed">
              {posted}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  )
}
