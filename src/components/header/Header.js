import React, { useState } from 'react';
import { ReactComponent as HeaderIcon } from './headerIcon.svg';
import { ReactComponent as HamburgerIcon } from './hamburgerIcon.svg';
import { ReactComponent as CloseIcon } from './closeIcon.svg';
import Drawer from 'react-modern-drawer'

import "./header.css"
import 'react-modern-drawer/dist/index.css'

const listOfMenuItems = [
  {
    path: 'home',
    title: "Home"
  },
  {
    path: 'works',
    title: "Works"
  },
  {
    path: 'about',
    title: "About"
  },
  {
    path: 'contact',
    title: "Contact"
  }
]

export default function Header({ breakpoint }){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleOnClick = (path) =>{
    const element = document.getElementById(path);
    const isMobileOrTablet = ["tablet", "mobile"].includes(breakpoint)
    const isAbout = path === "about"
    const block = isMobileOrTablet && isAbout ? "start" : "center"
    element.scrollIntoView({ behavior:"smooth", block:block });
  }

  const menuProps = {
    breakpoint,
    mobileMenuOpen,
    setMobileMenuOpen,
    handleOnClick,
  }

  return(
    <header className="header">
      <div className="header__logo">
        <HeaderIcon/>
        <span>Buddy Lim</span>
      </div>
      
      <CommonMenu menuProps={menuProps}/>
    </header>
  )
}

const CommonMenu = ({ menuProps }) =>{
  const { breakpoint, handleOnClick  } = menuProps

  switch(breakpoint){
    case 'desktop':
      return <DesktopMenu menuProps={menuProps}/>
    case 'mobile':
      return <MobileMenu menuProps={menuProps}/>
    case 'tablet':
      return <MobileMenu menuProps={menuProps}/>
    default: 
      return <MobileMenu menuProps={menuProps}/>
  }
}

const DesktopMenu = ({ menuProps }) =>{
  const { handleOnClick } = menuProps

  return (
    <div className="header__menu">
      {listOfMenuItems.map(menuItemObj =>{
        const { title, path } = menuItemObj
        return <span key={title} onClick={()=> handleOnClick(path)} className="header__item">{title}</span>
      })}
    </div>
  )
}

const MobileMenu = ({ menuProps }) =>{
  const { handleOnClick, mobileMenuOpen, setMobileMenuOpen } = menuProps

  const handleDrawerClick = () =>{
    setMobileMenuOpen((prevFlag) =>!prevFlag)
  }
  return (
    <div>
      <div onClick={handleDrawerClick}>
        <HamburgerIcon/>
      </div>
      <Drawer
        open={mobileMenuOpen}
        onClose={handleDrawerClick}
        direction="right"
        style={{ width: "100%" }}
        duration={200}
      >
        <div className="header__close" onClick={handleDrawerClick}>
          <CloseIcon/>
        </div>
        <div className="header__menu">
          {listOfMenuItems.map(menuItemObj =>{
            const { title, path } = menuItemObj
            return <span key={title} onClick={()=>{ handleOnClick(path); handleDrawerClick() }} className="header__item">{title}</span>
          })}
        </div>
      </Drawer>
    </div>
  )
}

