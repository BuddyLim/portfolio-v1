import React from "react";
import '../../base.css'
import { handleLinkClick } from "../../utils/openLink";
import './work.css'
import { m } from 'framer-motion/dist/framer-motion'
import FlubberIcon from "../flubber/FlubberIcon";

export default function Works({ breakpoint, worksObj }){
  const { title, subtitle, description, imgSrc, url, colors, paths, duration } = worksObj
  return(
    <div id="works" className="base-section">
      {/* <FlubberIcon width={29} height={29} paths={paths} colors={colors} duration={duration} />  */}
      <div className="work">
        <m.div 
          className="work__content"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="work__heading">
            <p className="work__title">{title}</p>
            <p className="work__subtitle">{subtitle}</p>
          </div>
          <div className="work__description">
            <p>{description}</p>
            { url && 
              <p className="work__information" onClick={() => handleLinkClick(url, breakpoint)}>Visit website -&gt;</p>
            }
          </div>
        </m.div>
        <img 
          className="work__image" 
          src={`${process.env.PUBLIC_URL}/works/${imgSrc}`}
          alt={`${title}-work`}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}