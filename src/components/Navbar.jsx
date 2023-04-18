import React from 'react'
import moment from 'moment/moment'

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Quotes App</span>
    <span className="">{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
  </div>
</nav>
  )
}

export default Navbar
