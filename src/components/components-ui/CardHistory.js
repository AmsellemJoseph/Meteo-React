import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    let nomVille = props.ville

    // const [favorite,setFavorite]=useState(localStorage.favorite? JSON.parse(localStorage.favorite):[])

    const classes = useStyles();

    const [temp, setTemp] = useState([])

    useEffect(() => {
        const fetchHistory = async () => {

            const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

            const CITY = nomVille;
            const KEY = `4b9f5975190fdade0d3af8dc0e53698e`

            const URL_COMPLETE = `${BASE_URL}units=metric&q=${CITY}&appid=${KEY}`;

            const res = await fetch(URL_COMPLETE)
            const response = await res.json()
            // setTemp(response.main.temp)

            setTemp(response.main.temp)
        }
        fetchHistory()
    }, [nomVille])

    // const favoriteCity = (bool) => {
    //     setVilleFav(!villeFav.isFavorite);
    //     if(bool){
    //         localStorage.setItem('favorite',[...favorite,villeFav]);
    //     }

    // }
    return (
        <Card className={classes.root} id="containerCardHistory">
            <CardContent>
                <div className="cardHistoryContainer">
                    <p className="cardHistoryVille">{props.ville}</p>
                    <p className="cardHistoryTemp">{Math.trunc(temp)}°c</p>
                    {/* {villeFav.isFavorite ? (<FavoriteIcon style={{ color: 'red' }} onClick={() => setvilleFav({ isFavorite: !villeFav.isFavorite }, console.log(villeFav.ville))} />) : <FavoriteBorderIcon onClick={() => setvilleFav({ isFavorite: !villeFav.isFavorite })} />} */}
                </div>
            </CardContent>
        </Card>
    );
}
