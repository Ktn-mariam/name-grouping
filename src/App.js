// import { useState } from 'react'
import AllNames from './components/AllNames/AllNames'
import NavBar from './components/NavBar'
import Home from './components/Home'
import GroupedNames from './components/GroupedNames/GroupedNames'
import NameTree from './components/NameTree/NameTree'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  // const [page, setPage] = useState("GROUPED_NAMES")

  // const

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/GroupedNames" element={<GroupedNames />}></Route>
          <Route path="/AllNames" element={<AllNames />}></Route>
          <Route path="/NameTree" element={<NameTree />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
