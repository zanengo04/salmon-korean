import React from 'react';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import { HashRouter, Route, Switch } from "react-router-dom";
import KoreanAlphabet from './components/Pages/Alphabet';
import Survival from './components/Pages/SurvivalKorean';
import About from './components/Pages/About';
import Grammar from './components/Pages/Grammar';
import Grammar1 from './components/Pages/Grammar/Grammar1';
import Grammar2 from './components/Pages/Grammar/Grammar2';
import Grammar3 from './components/Pages/Grammar/Grammar3';
import Grammar4 from './components/Pages/Grammar/Grammar4';

function HideAside(){
  if (window.location.pathname === '/register' || window.location.pathname === '/login'
  || window.location.pathname === '/typing' || window.location.pathname === '/typing-hangeul'
  || window.location.pathname === '/blog'){
    return null
  } else{
    return <Aside />
  }
}

function App({className}) {
  return (
    <HashRouter basename="https://zanengo04.github.io/salmon-korean">
      <div className={className}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/alphabet" component={KoreanAlphabet} />
          <Route path="/survival-korean" component={Survival} />
          <Route path="/grammar" component={Grammar} />
          <Route path="/to-be" component={Grammar1} />
          <Route path="/as-well" component={Grammar2} />
          <Route path="/like" component={Grammar3} />
          <Route path="/to-have" component={Grammar4} />

          
        </Switch>
        {HideAside()}
        <Footer />
      </div>
      
    </HashRouter>
    
  )
}

export default App;
