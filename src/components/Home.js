import React, { useRef, useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [names, setNames] = useState([])
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = () => {
    setInputValue(inputRef.current.value)
  }

  useEffect(() => {
    var json = require('../data/MOCK_DATA.json')
    setNames(json)
  }, [])
  const inputRef = useRef('')

  return (
    <div className="center">
      <h1>Welcome!</h1>
      <h3>Search a Name:</h3>
      <div className="center">
        <div className="align">
          <input
            className="searchbar"
            ref={inputRef}
            onChange={inputChangeHandler}
            type="text"
          />
          <button>SEARCH</button>
        </div>
        <ul>
          {names
            .filter((name) => {
              return (
                name.first_name
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                name.last_name.toLowerCase().includes(inputValue.toLowerCase())
              )
            })
            .map((name, index) => {
              return (
                <li key={index}>{`${name.first_name} ${name.last_name}`}</li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Home
