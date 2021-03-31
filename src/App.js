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
      <div className='containerNav'>
        <div className='navBar'>
          <NavBar />
        </div>
        <div className='search'>
          <Search subSearch={searchCity} />
        </div>
      </div>
      <Home city={ville} />
    </div>
  );
}

export default App;
