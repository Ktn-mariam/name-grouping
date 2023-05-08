import React, { useRef } from 'react'
import Search from './Search'
import './Names.css'
import Button from '@mui/material/Button'

function Names(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="button">
              <Button onClick={props.firstNameSort} variant="contained">
                Order by First Name
              </Button>
            </th>
            <th className="button">
              <Button onClick={props.LastNameSort} variant="contained">
                Order by Last Name
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.names.map((name, index) => {
            return (
              <tr key={index} className="tableColumn">
                <td>{name.first_name}</td>
                <td>{name.last_name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Names
