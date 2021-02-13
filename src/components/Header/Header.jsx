import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-text">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/bluestacks-1-569566.png"
            srcSet="https://cdn.iconscout.com/icon/free/png-512/bluestacks-1-569566.png 2x"
            alt="Bluestacks Icon"
            className="logo"
          />
          <div className="logo-content">
            <h2 className="white-color">Blue Stacks</h2>
            <p className="green-color">Play Bigger</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
