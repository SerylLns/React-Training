import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Project from '../components/Project';

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation></Navigation>
        <Project projectNumber={0}></Project>
        <ButtonsBottom left={'/'} right={"/project-2"}></ButtonsBottom>
      </div>
    </main>
  )
}
export const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation></Navigation>
        <Project projectNumber={1}></Project>
        <ButtonsBottom left={'/project-1'} right={"/project-3"}></ButtonsBottom>
      </div>
    </main>
  )
}
export const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Navigation></Navigation>
        <Project projectNumber={2}></Project>
        <ButtonsBottom left={'/project-2'} right={"/contact"}></ButtonsBottom>
      </div>
    </main>
  )
}
