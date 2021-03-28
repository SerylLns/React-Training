import React from 'react';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation></Navigation>
        <div className="home-main">
          <div className="main-content">
            <DynamicText></DynamicText>
          </div>
        </div>
        <ButtonsBottom right={"/project-1"}></ButtonsBottom>
      </div>
    </div>
  );
};

export default Home;