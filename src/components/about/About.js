import React from "react";

import '../../base.css'
import { handleLinkClick } from "../../utils/openLink";
import './about.css'

export default function About({ breakpoint }){
  return(
    <div id="about" className="base-section">
      <div className="about">
        <div className="about__heading">
          <div className="about__description">
            <p>My main expertise lies in web development where I primarily use React for front-end and NodeJS for back-end.</p>
            <p>From time to time I attend tech meetups to know about new and emerging technologies</p>
            <p>I dabble also with Langchain, LlAMAcpp and LLMs for some POCs</p>
          </div>
        </div>
        {/* <dl className="about__list">
          <dt className="about__list-title">My hobbies</dt>
          <dd>Experimenting with new tech</dd>
          <dd className="about__parkour" onClick={() =>{handleLinkClick("https://www.instagram.com/its_thatbuddy/", breakpoint)}}>Parkour</dd>
          <dd>Exploring</dd>

          <dt className="about__list-title">My learnings</dt>
          <dd>Scalable front-end architecture</dd>
          <dd>E2E Browser Testing</dd>
          <dd>Responsive layouts</dd>
        </dl> */}
      </div>
    </div>
  )
}