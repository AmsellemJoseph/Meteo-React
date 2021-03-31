import React from 'react'

const Day = (props) => {

    const min = Math.trunc(props.min)
    const max = Math.trunc(props.max)

    return (
        <div className='daily'>
            <h3>{props.day}</h3>
            <p>Min: {min}°c</p>
            <p>Max: {max}°c</p>
        </div>
    )
}

export default Day