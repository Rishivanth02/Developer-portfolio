import React from 'react'
import style from "./mainContent.module.scss";
import Home from '../../pages/home/Home';
import Skills from '../skills/Skills';
import ToolsAndTech from '../tools/ToolsAndTech';
import ExpandingHorizons from '../exploring/ExpandingHorizons';
import BeyondCode from '../beyondcode/BeyondCode';
import Contact from '../contact/Contact';



function MainContent() {
  return (
   <>
   <section className={`${style["main-content-wrapper"]}`}>
    <Home/>
    <Skills />
    <ToolsAndTech />
    <ExpandingHorizons />
    <BeyondCode />
    <Contact />
   </section>
   </>
  )
}

export default MainContent