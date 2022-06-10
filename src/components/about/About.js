import React from "react";

import '../../base.css'
import { handleLinkClick } from "../../utils/openLink";
import './about.css'

export default function About({ breakpoint }){
  return(
    <div className="base-section">
      <div className="about">
        <div className="about__heading">
          <p className="about__title">{"I’m Buddy Lim,\na web developer based in Kuala Lumpur"}</p>
          <div className="about__description">
            <p>My main expertise lies in web development where I primarily use React for front-end and NodeJS for back-end.</p>
            <p>I have also studied Game Development during my uni days so I have an understanding of Unity and Unreal. Don’t hesistate to reach out to me!</p>
          </div>
        </div>
        <dl className="about__list">
          <dt className="about__list-title">What I like</dt>
          <dd>Experimenting with new tech</dd>
          <dd className="about__parkour" onClick={() =>{handleLinkClick("https://www.instagram.com/its_thatbuddy/", breakpoint)}}>Parkour</dd>
          <dd>Exploring new environments</dd>

          <dt className="about__list-title">What I'm learning</dt>
          <dd>Scalable front-end architecture</dd>
          <dd>E2E Browser Testing</dd>
          <dd>Responsive layouts</dd>
        </dl>
      </div>
    </div>
  )
}