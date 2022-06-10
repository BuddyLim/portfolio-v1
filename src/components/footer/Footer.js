import React from 'react';

import '../../base.css'
import { handleLinkClick } from '../../utils/openLink';
import './footer.css'

export default function Footer({ breakpoint }){

  return(
    <footer>
      <div className="base-section">
        <div className="footer-section">
          <span className="footer-section__contact">Contact</span>
          <div className="footer-section__items">
            <span className="footer-section__links" onClick={() =>handleLinkClick("https://github.com/BuddyLim", breakpoint)}>Github</span>
            <span className="footer-section__links" onClick={() =>handleLinkClick("https://www.linkedin.com/in/buddy-lim/", breakpoint)}>LinkedIn</span>
            <span className="footer-section__links" onClick={() =>handleLinkClick("mailto:buddy.tlimk@gmail.com", breakpoint)}>Email</span>
            <span className="footer-section__links" onClick={() =>handleLinkClick(`${process.env.PUBLIC_URL}/Lim Kuang Tar Resume.pdf`, breakpoint)} className="footer-section__links">Resume</span>
          </div>
        </div>
      </div>
    </footer>
  )
}