import React, { useState } from 'react';
import { ReactComponent as HamburgerIcon } from './hamburgerIcon.svg';
import { ReactComponent as HeaderIcon } from './headerIcon.svg';
import { ReactComponent as CloseIcon } from './closeIcon.svg';
import Drawer from 'react-modern-drawer'

import "./header.css"
import 'react-modern-drawer/dist/index.css'
// import FlubberIcon from '../flubber/FlubberIcon';

import { m } from 'framer-motion/dist/framer-motion'


const listOfMenuItems = [
  {
    path: 'home',
    title: "Home"
  },
  {
    path: 'about',
    title: "About"
  },
  {
    path: 'works',
    title: "Public Works"
  },
  {
    path: 'contact',
    title: "Contact"
  }
]

// const headerIconProps = {
//   paths:[
//     "M9.99991 0L20 17H0L9.99991 0Z",
//     "M0 0H17V17H0V0Z",
//     "M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z",
//     "M0 0H17V17H0V0Z",
//     "M9.99991 0L20 17H0L9.99991 0Z",
//   ],
//   colors:[
//     "#31CF24",
//     "#56ABF9",
//     "#F3B234",
//     "#F96056",
//     "#31CF24",
//   ],
//   width: 20,
//   height: 20,
//   duration: 0.5
// }

export default function Header({ breakpoint }){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

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

  const handleHeaderClick = () =>{
    !isClicked && setIsClicked(true)
  }

  return(
    <header className="header">
      <div className="header__logo" onClick={handleHeaderClick}>
        {/* <FlubberIcon 
          {...headerIconProps}
        /> */}
        <HeaderIcon/>
        <m.div
          whileHover={{ scale: 1.2 }}    
          whileTap={{  scale: 0.8, }}
        >
          Lim Kuang Tar
        </m.div>
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
        <div className="header__close">
          <CloseIcon onClick={handleDrawerClick}/>
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

