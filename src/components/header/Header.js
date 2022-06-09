import React from 'react';
import { ReactComponent as HeaderIcon } from './headerIcon.svg';
import { ReactComponent as HamburgerIcon } from './hamburgerIcon.svg';

import "./header.css"

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
  return(
    <header className="header">
      <div className="header__logo">
        <HeaderIcon/>
        <span>Buddy Lim</span>
      </div>
      
      <CommonMenu breakpoint={breakpoint}/>
    </header>
  )
}

const CommonMenu = ({ breakpoint }) =>{
  switch(breakpoint){
    case 'desktop':
      return <DesktopMenu/>
    case 'mobile':
      return <MobileMenu/>
    case 'tablet':
      return <MobileMenu/>
    default: 
      return <MobileMenu/>
  }
}

const DesktopMenu = () =>{
  return (
    <div className="header__menu">
      {listOfMenuItems.map(menuItemObj =>{
        const { title, path } = menuItemObj
        return <span className="header__menu__item">{title}</span>
      })}
    </div>
  )
}

const MobileMenu = () =>{
  return (
    <div className="header__menu">
      <HamburgerIcon/>
    </div>
  )
}

