import React, { useRef } from 'react'
import TextField from '@mui/material/TextField'
import './Search.css'

function Search(props) {
  const inputRef = useRef('')
  console.log(inputRef.current.value)

  return (
    <th className="textfield">
      <TextField
        ref={inputRef}
        id="filled-search"
        label={`${props.ph}`}
        type="search"
        variant="filled"
      />
    </th>
  )
}

export default Search
