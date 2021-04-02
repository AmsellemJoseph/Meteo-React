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
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [temp, setTemp] = useState([])
    let nomVille = props.ville
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


    return (
        <Card className={classes.root} id="containerCardHistory">
            <CardContent>
                <div className="cardHistoryContainer">
                    <p className="cardHistoryVille">{props.ville}</p>
                    <p className="cardHistoryTemp">{Math.trunc(temp)}°c</p>
                    <FavoriteBorderIcon style={{ color: "green", fontSize: "30px" }} />
                </div>
            </CardContent>
        </Card>
    );
}
