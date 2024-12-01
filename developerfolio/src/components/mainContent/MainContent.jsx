import React from 'react'
import style from "./mainContent.module.scss";
import Home from '../../pages/home/Home';
import Skills from '../skills/Skills';
import ToolsAndTech from '../tools/ToolsAndTech';



function MainContent() {
  return (
   <>
   <section className={`${style["main-content-wrapper"]}`}>
    <Home/>
    <Skills />
    <ToolsAndTech />
   </section>
   </>
  )
}

export default MainContent