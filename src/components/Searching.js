import React, { useState } from 'react';
import ApiMeteo from './ApiMeteo'
import Search from './components-ui/Search';

const Searching = ({ subSearch }) => {

    const [ville, setCity] = useState('');
    const searchCity = (city) => {
        setCity('');
        setCity(city);
        console.log(ville);
    }

    return (
        <div>
            <Search subSearch={searchCity} />
            <ApiMeteo city={ville} />
        </div>
    )
}

export default Searching