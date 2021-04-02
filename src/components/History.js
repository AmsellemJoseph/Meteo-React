import React,{useState,useEffect} from 'react';
import CardHistory from './components-ui/CardHistory'

const History = ({local})=>{
    const [hyst,setHys]=useState(localStorage.test? JSON.parse(localStorage.test):[])
    console.log(local);
    var hys=local.splice(0,local.length-5);
    console.log(hys);
    

    // console.log(hyst.length);
    // console.log(hyst);
    return(
        <div className="historyList">
            {local.slice(0).reverse().map((historique,i)=>{
                return <CardHistory ville={historique.ville} key={i}/>
            })}
        </div>
    )
}

export default History;