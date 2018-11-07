import React from "react";
import Nav from "./Nav";
import Header from './Header';
import BackToSchool from './BackToSchool';
import TermsSection from './TermsSection';
import MissionStatement from './MissionStatement';

function App(){
  return (
    <div>
      <Nav/>
      <Header/>
      <BackToSchool/>
      <TermsSection/>
      <MissionStatement/>
    </div>
  );
}

export default App;
