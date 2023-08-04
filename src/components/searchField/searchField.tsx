import { TextInput, ActionIcon, Group } from "@mantine/core"
import { IconSearch, IconX } from "@tabler/icons-react"
import { useState } from "react"

import { useNavigate, createSearchParams } from "react-router-dom"

export const SearchField = () => {
  const [value, setValue] = useState("")

  const navigate = useNavigate()

  const navigateToFilteredPage = () => {
    navigate({
      pathname: "/filtered/",
      search: createSearchParams({ query: value }).toString(),
    })
  }

  const handleChange = (query: string) => {
    setValue(query)
  }

  const handleCloseClick = () => {
    setValue("")
    navigate({
      pathname: "/",
    })
  }

  const handleKeyUp = (key: string) => {
    if ((key === "Enter" || key === "Return") && value) {
      navigateToFilteredPage()
    }
  }

  return (
    <Group spacing="sm">
      <TextInput
        type="search"
        icon={<IconSearch size="1rem" />}
        rightSection={
          value && (
            <ActionIcon onClick={handleCloseClick}>
              <IconX size="1rem" />
            </ActionIcon>
          )
        }
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e.key)}
      />
    </Group>
  )
}
