import React from 'react'
import Nav from "../components/nav"
import { DropletFill } from 'react-bootstrap-icons'

const vegetables = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Nested Routing</h1>
        <DropletFill className="icon" />
        <h1 className="text-[1.5em]">Vegetables</h1>
      </div>
    </div>
  )
}

export default vegetables