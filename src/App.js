import React, { useState } from 'react'
import NavBar from './components/components-ui/NavBar'
import Search from './components/components-ui/Search'
import Home from './components/home/Home'




const App = () => {

  const [ville, setCity] = useState('netanya');
  const searchCity = ({ city }) => {
    setCity('');
    setCity(city);
  }

  return (
    <div className="App">
      <NavBar />
      <Search subSearch={searchCity} />
      <Home city={ville} />
    </div>
  );
}

export default App;
