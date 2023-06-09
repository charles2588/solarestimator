import React from 'react';
import './App.css';
import Estimator from './components/Estimator';

function App() {
  return (
    <div className="App">
      {/* <video autoPlay loop muted>
        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Megapack_Hero_D.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Estimator />
    </div>
  );
}

export default App;
