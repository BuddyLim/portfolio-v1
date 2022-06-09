import React from 'react';
import Header from './components/header/Header';
import './reset.css'
import './App.css'
import Home from './components/home/Home';

import listOfWorks from './components/works/works.json'

import useBreakpoint from 'use-breakpoint';
import Works from './components/works/Works';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 769 }

function App() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS);

  return (
    <div>
      <Header breakpoint={breakpoint}/>
      <main>
        <Home breakpoint={breakpoint}/>
        <div className="divider"/>
        {listOfWorks.map(worksObj =>{
          const { title } = worksObj
          return (
            <div key={title}>
              <Works key={title} worksObj={worksObj} breakpoint={breakpoint}/>
              <div className="divider"/>
            </div>
          )
        })}
        <About/>
        <div className="divider"/>
      </main>
      <Footer breakpoint={breakpoint}/>
    </div>
  );
}

export default App;
