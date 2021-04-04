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

export default function CardMeteo({ ville, pays, temp, coord, daily, logo }) {

  const [thisVilleFavorite, setThisFavorite] = useState(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
  // const city = ville;
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
      const villeF = { id: thisVilleFavorite.length + 1, ville: ville }
      if (fav.isFavorite) {
        setFlag(true)
        setThisFavorite(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
        localStorage.setItem('favorite', JSON.stringify([...thisVilleFavorite, villeF]))

      }
      else if (!fav.isFavorite && flag) {
        setThisFavorite(localStorage.favorite ? JSON.parse(localStorage.favorite) : [])
        setThisFavorite(thisVilleFavorite.slice(0, thisVilleFavorite.length - 1))
        localStorage.setItem('favorite', JSON.stringify([...thisVilleFavorite]))

      }
    }
    favo()
  }, [fav.isFavorite])


  const classes = useStyles();
  const temperature = Math.trunc(temp);
  return (
    <Card className={classes.root} id="containerCardMeteo">
      <CardContent>
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
        {fav.isFavorite ? (<FavoriteIcon style={{ color: 'red' }} onClick={() => setFav({ isFavorite: !fav.isFavorite })} />) : <FavoriteBorderIcon onClick={() => setFav({ isFavorite: !fav.isFavorite })} />}

      </div>
    </Card>
  );
}

