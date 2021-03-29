import React,{useState} from 'react'
import ApiMeteo from '../ApiMeteo'

const Home = ({city,subSearch})=>{
    const [ville,setVille]=useState("netanya");
    if(ville!==city){
        setVille(city)
    }
    console.log('La ville depuis home est '+city);

    return(
        <>
            <ApiMeteo city={city} subSearch={subSearch}/>  
        </>
    )
}

export default Home