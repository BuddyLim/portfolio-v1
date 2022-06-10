import React from "react";
import { ReactComponent as HomeIcon } from './homeIcon.svg';

import './home.css'
import '../../base.css'

export default function Home() {
  return (
    <div id="home" className="home base-section">
      <div className="home__title">
        <span className="home__greeting">Hello!</span>
        <span className="home__introduction">{"I'm Buddy Lim,\na web developer"}</span>
      </div>
      <div>
        <HomeIcon/>
      </div>
    </div>
    
  )
}
