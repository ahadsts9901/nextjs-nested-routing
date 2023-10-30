import React from 'react'
import Nav from "../components/nav"
import { PersonCheckFill } from 'react-bootstrap-icons'

const about = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Routing</h1>
        <PersonCheckFill className="icon" />
        <h1 className="text-[1.5em]">About</h1>
      </div>
    </div>
  )
}

export default about