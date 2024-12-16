import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const handleMenu = () => {
    setMenuActive(!menuActive)
  }

  //change color navbar after scrolle down
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'nav-container nav-container-bg' : 'nav-container'}>
      <p>Company <span className=''>Corporate</span></p>
      <div className='nav-content'>
        <div className={menuActive ? "nav-fullscreentrue" : "nav-fullscreen"}>
          <ul className='nav-menu'>
            <li className='action'>Beranda</li>
            <li className='action'>Tentang Kami</li>
            <li className='action'>Produk</li>
            <li className='action'>Galery</li>
            <li className='action'>Toko</li>
          </ul>
          <div className='nav-sign'>
            <button className=''>Login</button>
          </div>
        </div>
        <div className='nav-hamburger'>
          <div onClick={handleMenu}>
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;