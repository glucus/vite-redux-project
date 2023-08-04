import { useRouteError, isRouteErrorResponse } from "react-router-dom"
import { Container, Center, Stack, Title, Text } from "@mantine/core"
import { HomeButton } from "../components/homeButton"

export const ErrorPage = () => {
  let error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Container>
        <Center mt={80} mb={80}>
          <Stack>
            <Title order={2}>{error.status}</Title>
            <Text>{error.statusText}</Text>
            {error.data?.message && <p>{error.data.message}</p>}
            <HomeButton />
          </Stack>
        </Center>
      </Container>
    )
  } else {
    return (
      <Container>
        <Center mt={80} mb={80}>
          <Stack>
            <Title order={2}>Oops!</Title>
            <Text>Something went wrong</Text>
            <HomeButton />
          </Stack>
        </Center>
      </Container>
    )
  }
}
