import React from 'react'
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header;