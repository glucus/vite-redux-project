import { TextInput, ActionIcon } from "@mantine/core"
import { Search } from "tabler-icons-react"
import { useState } from "react"

export const SearchField = () => {
  const [value, setValue] = useState("")

  const handleChange = (query: string) => {
    setValue(query)
  }

  const handleClick = () => {
    if (value) {
      console.log(`query: ${value}`)
    }
  }

  const handleKeyUp = (key: string) => {
    if ((key === "Enter" || key === "Return") && value) {
      console.log(`query: ${value}`)
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
