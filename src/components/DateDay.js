import React from 'react'

const DateDay = ()=>{

    let date = new Date()
    const format = {
        weekday : "short",
        day : "numeric",
        month : "long",
        year : "2-digit",
    }
    console.log(date.toLocaleDateString('en',format));

    return(
        <div>
            <p>{date.toLocaleDateString('en',format)}</p>
        </div>
    )
}

export default DateDay