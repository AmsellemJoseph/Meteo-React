import React from 'react';


const Weekly = (props)=>{

const week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

let date = new Date();
let day = date.getDay();

let weekday = week.slice(day-1,week.length).concat(week.slice(0,day-1));
console.log(weekday);




    return(
        <div>
            <div>
                <h3>{week[0]}</h3>
            </div>
        </div>
    )
}

export default Weekly