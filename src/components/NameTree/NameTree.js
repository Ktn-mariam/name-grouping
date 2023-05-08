import React, { useState, useEffect } from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function NameTree() {
  const [names, setNames] = useState([])
  useEffect(() => {
    var json = require('../../data/MOCK_DATA.json')
    setNames(json)
  }, [])

  const namesByLetter = names.reduce((obj, name) => {
    const firstLetter = name.first_name.charAt(0).toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), name],
    }
  }, {})

  const sections = Object.keys(namesByLetter)
    .sort()
    .map((letter, id) => {
      return (
        <TreeItem key={id} nodeId={`${id}`} label={letter}>
          {namesByLetter[letter].map((name, index) => {
            return (
              <TreeItem
                key={index}
                nodeId={`${index}`}
                label={`${name.first_name} ${name.last_name}`}
              ></TreeItem>
            )
          })}
        </TreeItem>
      )
    })

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 1000, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {sections}
    </TreeView>
  )
}

export default NameTree
