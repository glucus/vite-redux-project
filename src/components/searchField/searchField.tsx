import { TextInput, ActionIcon, Group } from "@mantine/core"
import { Search, X } from "tabler-icons-react"
import { useState } from "react"

import { useNavigate, useSearchParams } from "react-router-dom"

export const SearchField = () => {
  const [filterBy, setFilterBy] = useState<"author" | "message">("message")
  const [value, setValue] = useState("")

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()

  const navigateToFilteredPage = () => {
    navigate("/filtered", { replace: true })
    setSearchParams({ filterBy: filterBy, query: value })
  }

  const handleChange = (query: string) => {
    setValue(query)
  }

  const handleCloseClick = () => {
    setValue("")
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
        icon={<Search size="1rem" />}
        rightSection={
          value && (
            <ActionIcon onClick={handleCloseClick}>
              <X size="1rem" />
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
