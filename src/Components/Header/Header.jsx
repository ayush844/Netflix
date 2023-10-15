import React from 'react'
import "./Header.scss"

import logo from "../../images/pngwing.com (2).png"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div>

        <nav className="header">

            <img src={logo} alt="logo" />

            <div>
                <Link to="/tvshows">TV Shows</Link>
                <Link to="/movies">MOVIES</Link>
                <Link to="/recentlyadded">RECENTLY ADDED</Link>
                <Link to="/mylist">MY LIST</Link>
            </div>

            <SearchIcon />

        </nav>
      
    </div>
  )
}

export default Header
