import { TextInput, ActionIcon } from "@mantine/core"
import { Search } from "tabler-icons-react"
import { useState } from "react"

import { useNavigate, useSearchParams } from "react-router-dom"

export const SearchField = () => {
  const [filterBy, setFilterBy] = useState<"author" | "message">("message")
  const [value, setValue] = useState("")

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (query: string) => {
    setValue(query)
  }

  const handleClick = () => {
    if (value) {
      navigate("filtered")
      setSearchParams({ filterBy: filterBy, query: value })
    }
  }

  const handleKeyUp = (key: string) => {
    if ((key === "Enter" || key === "Return") && value) {
      navigate("filtered")
      setSearchParams({ filterBy: filterBy, query: value })
    }
  }

  return (
    <TextInput
      type="search"
      rightSection={
        <ActionIcon color="blue" variant="filled" onClick={handleClick}>
          <Search size="1rem" />
        </ActionIcon>
      }
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onKeyUp={(e) => handleKeyUp(e.key)}
    />
  )
}
