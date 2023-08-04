import { useRouteError } from "react-router-dom"
import { Container, Center, Stack, Title, Text } from "@mantine/core"
import { HomeButton } from "../components/homeButton"

export const ErrorPage = () => {
  let error = useRouteError()
  console.error(error)

  if (error.status === 404) {
    return (
      <Container>
        <Center mt={80} mb={80}>
          <Stack>
            <Title order={3}>Error</Title>
            <Text>Page not found</Text>
            <HomeButton />
          </Stack>
        </Center>
      </Container>
    )
  }
  return (
    <Container>
      <Center mt={80} mb={80}>
        <Stack>
          <Title order={3}>Error</Title>
          <Text>Something went wrong</Text>
          <HomeButton />
        </Stack>
      </Center>
    </Container>
  )
}
