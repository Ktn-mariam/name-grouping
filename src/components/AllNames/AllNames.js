import React, { useEffect, useState } from 'react'
import Names from './Names'

function AllNames() {
  const [names, setNames] = useState([])

  useEffect(() => {
    var json = require('../../data/MOCK_DATA.json')
    setNames(json)
  }, [])

  const sortByFirstNameHandler = () => {
    console.log('firstName')
    let nameList = [...names]
    const sortedNames = nameList.sort((a, b) => {
      if (a.first_name < b.first_name) {
        return -1
      } else {
        return 1
      }
    })
    setNames(sortedNames)
  }

  const sortByLastNameHandler = () => {
    let nameList = [...names]
    const sortedNames = nameList.sort((a, b) => {
      if (a.last_name < b.last_name) {
        return -1
      } else {
        return 1
      }
    })
    setNames(sortedNames)
  }

  return (
    <div>
      <Names
        names={names}
        firstNameSort={sortByFirstNameHandler}
        LastNameSort={sortByLastNameHandler}
      />
    </div>
  )
}

export default AllNames
