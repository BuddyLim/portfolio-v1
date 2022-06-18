import React from "react";
import { ReactComponent as HomeIcon } from './homeIcon.svg';
import { m } from 'framer-motion/dist/framer-motion'

import './home.css'
import '../../base.css'

const animateProps = {
  initial:{ opacity: 0, x: -100 },
  animate:{
    opacity: 1,
    x: 0,
  },
  transition:{
    duration: 0.8,
    type: "spring",
    bounce: 0.4,
  }
}

export default function Home() {
  return (
    <div id="home" className="home base-section">
      <div className="home__title">
        <m.span
          className="home__greeting"
          {...animateProps}
        >
          Hello!
        </m.span>
        {/* <span className="home__greeting">Hello!</span> */}
        <m.span className="home__introduction" {...animateProps}>{"I'm Buddy Lim,\na web developer"}</m.span>
      </div>
      <div>
        <HomeIcon/>
      </div>
    </div>
    
  )
}
