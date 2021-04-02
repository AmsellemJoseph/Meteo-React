import React, { useState } from 'react'
import NavBar from './components/components-ui/NavBar'
import Search from './components/components-ui/Search'
import Home from './components/home/Home'
import History from "./components/History"
import HistoryModal from './components/components-ui/HistoryModal'




const App = () => {

  const [ville, setCity] = useState('Netanya');
  const searchCity = ({ city }) => {
    setCity('');
    setCity(city);
  }

  return (
    <div className="App">
      <div className='containerNav'>
        <div className='navBar'>
          <NavBar />
          <HistoryModal/>
        </div>
        <div className='search'>
          <Search subSearch={searchCity} />
        </div>
      </div>
      <Home city={ville} />
      {/* <History/> */}
    </div>
  );
}

export default App;
