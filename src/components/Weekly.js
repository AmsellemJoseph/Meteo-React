import React, { useState } from 'react';
import Day from './Day'


const Weekly = ({daily}) => {
    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    // const [dayTemp, setDaily] = useState([{daily}])
    console.log(daily.day1)

    let date = new Date();
    let day = date.getDay();

    let weekday = week.slice(day , week.length).concat(week.slice(0, day ));
    // console.log(props.daily[0]);


    console.log(weekday);

    return (
        <div className='yuyu'>
            <Day day={weekday[0]} tempDay={daily.day1}/>
            <Day day={weekday[1]} tempDay={daily.day2}/>
            <Day day={weekday[2]} tempDay={daily.day3}/>
            <Day day={weekday[3]} tempDay={daily.day4}/>
            <Day day={weekday[4]} tempDay={daily.day5}/>
            <Day day={weekday[5]} tempDay={daily.day6}/>
            <Day day={weekday[6]} tempDay={daily.day7}/>
        </div>
    )

}

export default Weekly

// tempDay={daily[i].temp.day}