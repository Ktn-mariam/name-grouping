import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Icon from 'react-hero-icon'

function NavBar() {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        <Icon className="home" icon="home" type="outline" />
      </Link>
      <Link className="link" to="/GroupedNames">
        Grouped Names
      </Link>
      <Link className="link" to="/AllNames">
        Name List
      </Link>
      <Link className="link" to="/NameTree">
        Name Tree
      </Link>
    </nav>
  )
}

export default NavBar
