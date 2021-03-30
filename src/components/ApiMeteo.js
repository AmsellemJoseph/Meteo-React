import React, { useState, useEffect } from 'react';
import Meteo from './Meteo'
import Carte from './Carte'
import Weekly from './Weekly'
import LogoTemp from './LogoTemp'


const ApiMeteo = ({ city }) => {
    const [villeTemp, setCity] = useState({})
    const [daily, setDaily] = useState({
        min1: '',
        min2: '',
        min3: '',
        min4: '',
        min5: '',
        min6: '',
        min7: '',
        min8: '',
        max1: '',
        max2: '',
        max3: '',
        max4: '',
        max5: '',
        max6: '',
        max7: '',
        max8: '',
    });
    if (villeTemp !== city) {
        setCity('');
        setCity(city);
    }
    const [logoTemp, setLogo] = useState({
        logoTemp: '',
    });
    const [temp, setTemp] = useState({})
    const [coord, setCoord] = useState({
        lat: '',
        lon: ''
    });
    const [ville, setVille] = useState({
        ville: '',
        pays: '',
    });


    useEffect(() => {

        const fetchBase = async () => {

            const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

            const CITY = villeTemp;
            const KEY = `4b9f5975190fdade0d3af8dc0e53698e`

            const URL_COMPLETE = `${BASE_URL}units=metric&q=${CITY}&appid=${KEY}`;

            const res = await fetch(URL_COMPLETE)
            const response = await res.json()
            if (response.cod !== 200) {
                return alert("Ville non existante")
            }

            setVille({
                ville: response.name,
                pays: response.sys.country,
            })
            setLogo({
                logoTemp: response.weather[0].icon
            })
            const BASE_URL2 = 'https://api.openweathermap.org/data/2.5/onecall?'

            setCoord({
                lat: await response.coord.lat,
                lon: await response.coord.lon
            });

            const LAT = await response.coord.lat;
            const LON = await response.coord.lon;
            const EXCLUDE = 'minutely,hourly';
            const KEY2 = '4b9f5975190fdade0d3af8dc0e53698e';
            const UNITS = 'metric';

            const URL_COMPLETE2 = `${BASE_URL2}lat=${LAT}&lon=${LON}&exclude=${EXCLUDE}&appid=${KEY2}&units=${UNITS}`

            const res2 = await fetch(URL_COMPLETE2)
            const response2 = await res2.json();

            setTemp(await response2.current)
            setDaily({
                min1: response2.daily[0].temp.min,
                min2: response2.daily[1].temp.min,
                min3: response2.daily[2].temp.min,
                min4: response2.daily[3].temp.min,
                min5: response2.daily[4].temp.min,
                min6: response2.daily[5].temp.min,
                min7: response2.daily[6].temp.min,
                min8: response2.daily[7].temp.min,
                max1: response2.daily[0].temp.max,
                max2: response2.daily[1].temp.max,
                max3: response2.daily[2].temp.max,
                max4: response2.daily[3].temp.max,
                max5: response2.daily[4].temp.max,
                max6: response2.daily[5].temp.max,
                max7: response2.daily[6].temp.max,
                max8: response2.daily[7].temp.max,
            })

        }
        fetchBase();

    }, [villeTemp])


    return (
        <div>
            <Meteo ville={ville.ville} pays={ville.pays} temp={temp.temp} />
            <Carte coord={coord} />
            <Weekly daily={daily} />
            <LogoTemp logo={logoTemp} />
        </div>
    );

}

export default ApiMeteo