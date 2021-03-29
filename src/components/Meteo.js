import React from 'react'

const Meteo = (props) => {

    // const {coordonnes} = useContext(ApiContext);
    // console.log(coordonnes);
    // console.log(props.coordonnes.lat);
    return (
        
        <div>
            <h1>{props.ville}</h1>
            <h2>{props.temp}</h2>
        </div>
    )
}

export default Meteo
