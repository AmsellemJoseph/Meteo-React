import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
    console.log(nomVille)
    const [villeFav, setvilleFav] = useState({
        ville: nomVille,
        isFavorite: false
    })
    // const [favorite,setFavorite]=useState(localStorage.favorite? JSON.parse(localStorage.favorite):[])
    console.log(villeFav)
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [temp, setTemp] = useState([])
    console.log(nomVille);
    useEffect(() => {
        const fetchHistory = async () => {

            const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

            const CITY = nomVille;
            const KEY = `4b9f5975190fdade0d3af8dc0e53698e`

            const URL_COMPLETE = `${BASE_URL}units=metric&q=${CITY}&appid=${KEY}`;

            const res = await fetch(URL_COMPLETE)
            const response = await res.json()
            // setTemp(response.main.temp)
            console.log(response.main.temp);
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
                    {villeFav.isFavorite ? (<FavoriteIcon style={{ color: 'red' }} onClick={() => setvilleFav({ isFavorite: !villeFav.isFavorite }, console.log(villeFav.ville))} />) : <FavoriteBorderIcon onClick={() => setvilleFav({ isFavorite: !villeFav.isFavorite })} />}
                </div>
            </CardContent>
        </Card>
    );
}
