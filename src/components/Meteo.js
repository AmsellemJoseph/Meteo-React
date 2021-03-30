import React from 'react'

const Meteo = (props) => {

    return (

        <div>
            <h1>{props.ville}</h1>
            <h3>{props.pays}</h3>
            <h2>{props.temp}°c</h2>
        </div>
    )
}

export default Meteo
