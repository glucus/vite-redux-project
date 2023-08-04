import { TextInput, ActionIcon, Group } from "@mantine/core"
import { IconSearch, IconX } from "@tabler/icons-react"
import { useState, useCallback, useMemo } from "react"

import { useNavigate, createSearchParams } from "react-router-dom"

export const SearchField = () => {
  const [value, setValue] = useState("")

  const navigate = useNavigate()

  const navigateToFilteredPage = useCallback(() => {
    navigate({
      pathname: "/filtered/",
      search: createSearchParams({ query: value }).toString(),
    })
  }, [navigate, value])

  const handleChange = useCallback((query: string) => {
    setValue(query)
  }, [])

  const handleCloseClick = useCallback(() => {
    setValue("")
    navigate({
      pathname: "/",
    })
  }, [navigate])

  const handleKeyUp = useCallback(
    (key: string) => {
      if ((key === "Enter" || key === "Return") && value) {
        navigateToFilteredPage()
      }
    },
    [navigateToFilteredPage, value],
  )

  return useMemo(() => {
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
  }, [handleChange, handleCloseClick, handleKeyUp, value])
}
