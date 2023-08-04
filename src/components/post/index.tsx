import { Card, Group, Text, Avatar } from "@mantine/core"
import { Link } from "react-router-dom"
import { PostContents } from "../../features/posts/types"
import { format } from "date-fns"
import { memo } from "react"
import isEqual from "lodash/isEqual"

import styles from "./index.module.css"

type Props = {
  post: PostContents
  key: string
}

export const Post = memo(
  ({ post }: Props) => {
    const { message, author, posted } = post

    const formatPosted = (posted: string) => {
      const date = Date.parse(posted)
      return format(date, "MMMM do yyyy, h:mm a")
    }

    return (
      <Card withBorder radius="md" p="xs" data-testid="post">
        <Group noWrap spacing="sm">
          <div>
            <Text mt="xs" mb="md" align="left">
              {message}
            </Text>
            <Group spacing="xs">
              <Link to={`/authors/${author.id}`} className={styles.link}>
                <Group spacing="xs" noWrap>
                  <Avatar size="sm" src={author.image} />
                  <Text
                    size="sm"
                    fw={600}
                    color="teal"
                  >{`${author.firstName} ${author.lastName}`}</Text>
                </Group>
              </Link>
              <Text size="sm" color="dimmed">
                {`Posted ${formatPosted(posted)}`}
              </Text>
            </Group>
          </div>
        </Group>
      </Card>
    )
  },
  (prevProps, nextProps) => isEqual(prevProps.post, nextProps.post),
)
