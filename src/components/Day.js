import React from 'react'

const Day = (props) => {


    return (
        <div className='daily'>
            <h3>{props.day}</h3>
            <p>Min: {props.min}°c</p>
            <p>Max: {props.max}°c</p>
        </div>
    )
}

export default Day