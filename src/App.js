// import './App.css';
import React,{useState} from 'react'
import ApiMeteo from './components/ApiMeteo'
import NavBar from './components/components-ui/NavBar'
import Search from './components/components-ui/Search'
import Searching from './components/Searching'
import Home from './components/home/Home'
// import Weekly from './components/Weekly'



const App =()=> {

  const [ville,setCity] = useState('netanya');
  const searchCity = ({city})=>{
    setCity('');
    console.log("La ville depuis la fonction search app est "+city);
    setCity(city);
    
  }
  console.log("la ville depuis app est "+ville);
  
  return (
    <div className="App">
      <NavBar/>
      <Search subSearch={searchCity}/>
      {/* <Searching/> */}
          {/* <ApiMeteo city={city}/> */}
          <Home city={ville}/>
        {/* <Weekly/> */}
      
    </div>
  );
}

export default App;
