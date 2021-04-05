import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Meteo from '../Meteo'
import Carte from '../Carte'
import Weekly from '../Weekly'
import LogoTemp from '../LogoTemp'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Date from '../DateDay'
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
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
}));

export default function CardMeteo({ ville, pays, temp, coord, daily, logo, onClick }) {

  const [thisVilleFavorite, setThisFavorite] = useState(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
  const [iden, setIden] = useState({ iden: thisVilleFavorite.length + 1 })
  const [fav, setFav] = useState({ isFavorite: false });
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    const liked = () => {
      setFav({ isFavorite: false })
      setFlag(false);
    }
    liked()
  }, [ville])

  useEffect(() => {
    const favo = async () => {
      setThisFavorite(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
      setIden({ iden: thisVilleFavorite.length + 1 })
      const villeF = { id: thisVilleFavorite.length + 1, ville: ville }
      if (fav.isFavorite) {
        setFlag(true)
        setThisFavorite(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
        localStorage.setItem('favorite', JSON.stringify([...thisVilleFavorite, villeF]))

      }
      else if (!fav.isFavorite && flag) {
        setFlag(false)
        setThisFavorite(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
        setThisFavorite(thisVilleFavorite.slice(0, thisVilleFavorite.length))
        localStorage.setItem('favorite', JSON.stringify([...thisVilleFavorite]))

      }
    }
    favo()
  }, [fav.isFavorite])

  const tentative = () => {
    onClick();
    setFav({ isFavorite: !fav.isFavorite })
  }

  const classes = useStyles();
  const temperature = Math.trunc(temp);
  return (
    <Card className={classes.root} id="containerCardMeteo">
      <CardContent>
        <div className='date'>
          <Date />
        </div>
        <div className='meteoCard'>
          <Meteo ville={ville} pays={pays} temp={temperature} />
        </div>
        <div className='carteCard'>
          <Carte coord={coord} />
        </div>
        <div className="weeklyCard">
          <Weekly daily={daily} />
        </div>
        <div className="logoCard">
          <LogoTemp logo={logo} />
        </div>
      </CardContent>
      <div className='favoriteCard'>
        {fav.isFavorite ? (<Tooltip arrow placement="left" id="rem" title="Remove" aria-label="Remove"><Fab color="primary" id='remove' className={classes.fab}><FavoriteIcon style={{ color: 'red', fontSize: '30px' }} onClick={tentative} /></Fab></Tooltip>) : <Tooltip arrow placement="left" title="Add" aria-label="add"><Fab color="primary" id="add" className={classes.fab}><FavoriteBorderIcon style={{ fontSize: '30px' }} onClick={tentative} /></Fab></Tooltip>}

      </div>
    </Card>
  );
}

