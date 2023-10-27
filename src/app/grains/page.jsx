import React from 'react'
import Nav from "../components/nav"
import { Cookie } from 'react-bootstrap-icons'

const grains = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Nested Routing</h1>
        <Cookie className="icon" />
        <h1 className="text-[1.5em]">Grains</h1>
      </div>
    </div>
  )
}

export default grains