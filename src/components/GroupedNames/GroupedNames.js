import React, { useEffect, useState } from 'react'
import './GroupedNames.css'

function GroupedNames() {
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
    .map((letter) => {
      return (
        <div className="block">
          <div className="title">{letter}</div>
          <ul className="names">
            {namesByLetter[letter].map((name, index) => {
              return (
                <li key={index}>{`${name.first_name} ${name.last_name}`}</li>
              )
            })}
          </ul>
        </div>
      )
    })

  return <div className="grid-blocks">{sections}</div>
}

export default GroupedNames
