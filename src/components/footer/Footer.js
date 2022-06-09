import React from 'react';

import '../../base.css'
import './footer.css'

export default function Footer({ breakpoint }){

  const handleLinkClick = (url) =>{
    if(["tablet", "mobile"].includes(breakpoint)){
      window.location.assign(url);
      return
    }

    window.open(url, '_blank').focus();
  }

  return(
    <footer>
      <div className="base-section">
        <div className="footer-section">
          <span className="footer-section__contact">Contact</span>
          <div className="footer-section__items">
            <span className="footer-section__links" onClick={() =>handleLinkClick("https://github.com/BuddyLim")}>Github</span>
            <span className="footer-section__links" onClick={() =>handleLinkClick("https://www.linkedin.com/in/buddy-lim/")}>LinkedIn</span>
            <span className="footer-section__links" onClick={() =>handleLinkClick("mailto:buddy.tlimk@gmail.com")}>Email</span>
            <span className="footer-section__links" onClick={() =>handleLinkClick(`${process.env.PUBLIC_URL}/Lim Kuang Tar Resume.pdf`)} className="footer-section__links">Resume</span>
          </div>
        </div>
      </div>
    </footer>
  )
}