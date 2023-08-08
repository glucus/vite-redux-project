import { TextInput, ActionIcon, Group } from "@mantine/core"
import { IconSearch, IconX } from "@tabler/icons-react"
import { useCallback, useMemo, useState } from "react"

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

  const handleChange = (query: string) => {
    setValue(query)
  }

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

  const searchIcon = useMemo(() => <IconSearch size="1rem" />, [])
  const crossIcon = useMemo(() => <IconX size="1rem" />, [])

  return useMemo(
    () => (
      <Group spacing="sm">
        <TextInput
          type="search"
          icon={searchIcon}
          rightSection={
            <ActionIcon onClick={handleCloseClick} disabled={!value}>
              {crossIcon}
            </ActionIcon>
          }
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyUp={(e) => handleKeyUp(e.key)}
        />
      </Group>
    ),
    [crossIcon, handleCloseClick, handleKeyUp, searchIcon, value],
  )
}
