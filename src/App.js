import React from 'react';
import Header from './components/header/Header';
import './reset.css'
import './App.css'
import Home from './components/home/Home';

import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 769 }

function App() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS);

  return (
    <div>
      <Header breakpoint={breakpoint}/>
      <main>
        <Home breakpoint={breakpoint}/>
        <div className="divider"/>
      </main>
    </div>
  );
}

export default App;
