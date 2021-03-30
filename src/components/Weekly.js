import React from 'react';
import Day from './Day'


const Weekly = ({ daily }) => {
    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let date = new Date();
    let day = date.getDay();

    let weekday = week.slice(day, week.length).concat(week.slice(0, day));

    return (
        <div className='yuyu'>
            <Day day={weekday[0]} min={daily.min1} max={daily.max1} />
            <Day day={weekday[1]} min={daily.min2} max={daily.max2} />
            <Day day={weekday[2]} min={daily.min3} max={daily.max3} />
            <Day day={weekday[3]} min={daily.min4} max={daily.max4} />
            <Day day={weekday[4]} min={daily.min5} max={daily.max5} />
            <Day day={weekday[5]} min={daily.min6} max={daily.max6} />
            <Day day={weekday[6]} min={daily.min7} max={daily.max7} />
            <Day day={weekday[0]} min={daily.min8} max={daily.max8} />
        </div>
    )

}

export default Weekly
