import React from 'react'
import "../styles/header.scss"
import logo from "../Assests/logo.png"
import { Link } from 'react-router-dom'
import {LuSearch} from "react-icons/lu"

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="jpeg" />
      <div className="menu">
        <Link to="/">TV Shows</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Recently Added</Link>
        <Link to="/">My List</Link>
      </div>
    <LuSearch/>
    </nav>
  )
}

export default Header