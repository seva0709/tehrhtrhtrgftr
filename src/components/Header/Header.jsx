import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <Link to={'/'}>HOME</Link>
                    <Link to={'/contacts'}>CONTACTS</Link>
                    <Link to={'/about'}>ABOUT</Link>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header