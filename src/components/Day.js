import React from 'react'

const Day = (props) => {


    return (
        <div className='daily'>
            <h3>{props.day}</h3>
            <p>{props.tempDay}</p>
        </div>
    )
}

export default Day