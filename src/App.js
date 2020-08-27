import React from 'react';
import Lottie from 'react-lottie'

import dataAnimation from './assets/page.json'
import logo from './assets/sitedobem.jpg'

import './style.css'

const defaultOptionsAnimation = {
  loop: true,
  autoplay: true,
  animationData: dataAnimation,

};

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={logo} className="logo" alt="" />
        <h1>Estamos em construcão</h1>
        <Lottie className="lottieFile" options={defaultOptionsAnimation}
          height={"auto"}
          width={"50%"}
          isClickToPauseDisabled={true}
        />
      </div>
    </div>
  );
}

export default App;
