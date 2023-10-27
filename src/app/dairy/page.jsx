import React from 'react'
import Nav from "../components/nav"
import { Egg } from 'react-bootstrap-icons'

const dairy = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Nested Routing</h1>
        <Egg className="icon" />
        <h1 className="text-[1.5em]">Dairy</h1>
      </div>
    </div>
  )
}

export default dairy