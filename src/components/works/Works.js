import React from "react";
import '../../base.css'
import './work.css'

export default function Works({ breakpoint, worksObj }){
  const { title, subtitle, description, imgSrc, infoPath } = worksObj
  return(
    <div id="works" className="base-section">
      <div className="work">
        <div className="work__content">
          <div className="work__heading">
            <p className="work__title">{title}</p>
            <p className="work__subtitle">{subtitle}</p>
          </div>
          <div className="work__description">
            <p>{description}</p>
            {/* <p className="work__information">More Information -&gt;</p> */}
          </div>
        </div>
        <img 
          className="work__image" 
          src={`${process.env.PUBLIC_URL}/works/${imgSrc}`}
          alt={`${title}-work-image`}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}